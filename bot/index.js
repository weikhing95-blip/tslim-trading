import express from 'express'
import { twiml as TwilioTwiml } from 'twilio'

const app = express()
app.use(express.urlencoded({ extended: false }))

const {
  TWILIO_ACCOUNT_SID,
  TWILIO_AUTH_TOKEN,
  GITHUB_TOKEN,
  GITHUB_OWNER = 'weikhing95-blip',
  GITHUB_REPO  = 'tslim-trading',
  ALLOWED_NUMBER,          // mother's WhatsApp number e.g. whatsapp:+601XXXXXXXX
  PORT = 3001,
} = process.env

// In-memory session: phone → { mediaUrl, mediaContentType, step }
const sessions = new Map()

const GRADES = {
  '1': 'manek-kasar',
  '2': 'manek-halus',
  '3': 'manek-potong',
}

const GRADE_NAMES = {
  'manek-kasar':  'Manek Kasar',
  'manek-halus':  'Manek Halus',
  'manek-potong': 'Manek Potong',
}

const GRADE_MENU = '1 · Manek Kasar\n2 · Manek Halus\n3 · Manek Potong'

// Download a Twilio media URL (requires basic auth)
async function downloadMedia(url) {
  const creds = Buffer.from(`${TWILIO_ACCOUNT_SID}:${TWILIO_AUTH_TOKEN}`).toString('base64')
  const res = await fetch(url, { headers: { Authorization: `Basic ${creds}` } })
  if (!res.ok) throw new Error(`Download failed: ${res.status}`)
  const buffer = await res.arrayBuffer()
  return Buffer.from(buffer)
}

// Commit an image buffer to GitHub via the Contents API
async function commitToGitHub(imageBuffer, gradeSlug, ext = 'jpg') {
  const ts = new Date().toISOString().replace(/[-:.TZ]/g, '').slice(0, 14)
  const filename = `${ts}.${ext}`
  const filePath = `public/assets/photos/grades/${gradeSlug}/${filename}`

  const res = await fetch(
    `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${filePath}`,
    {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
        'Content-Type': 'application/json',
        'X-GitHub-Api-Version': '2022-11-28',
        'User-Agent': 'tslim-photo-bot',
      },
      body: JSON.stringify({
        message: `feat: add ${gradeSlug} photo via WhatsApp`,
        content: imageBuffer.toString('base64'),
        committer: { name: 'TSLIM Photo Bot', email: 'bot@tslim-trading.com' },
      }),
    }
  )
  if (!res.ok) {
    const err = await res.json()
    throw new Error(err.message || `GitHub ${res.status}`)
  }
  return filename
}

function reply(twiml, text) {
  twiml.message(text)
}

app.post('/webhook', async (req, res) => {
  const twiml = new TwilioTwiml.MessagingResponse()
  const from          = req.body.From || ''
  const body          = (req.body.Body || '').trim()
  const numMedia      = parseInt(req.body.NumMedia || '0', 10)
  const mediaUrl      = req.body.MediaUrl0
  const mediaType     = (req.body.MediaContentType0 || 'image/jpeg').toLowerCase()

  // Only accept messages from the authorised number
  if (ALLOWED_NUMBER && from !== ALLOWED_NUMBER) {
    res.type('text/xml').send(twiml.toString())
    return
  }

  const session = sessions.get(from) || { step: 'idle', mediaUrl: null, ext: 'jpg' }

  try {
    if (numMedia > 0 && mediaType.startsWith('image/')) {
      // Received a photo — ask which grade
      const ext = mediaType.split('/')[1].replace('jpeg', 'jpg')
      sessions.set(from, { step: 'awaiting_grade', mediaUrl, ext })
      reply(twiml, `Got it! Which grade is this?\n\n${GRADE_MENU}\n\nReply with 1, 2, or 3.`)

    } else if (session.step === 'awaiting_grade' && GRADES[body]) {
      // Grade confirmed — download and commit
      const gradeSlug  = GRADES[body]
      const gradeName  = GRADE_NAMES[gradeSlug]
      const imageBuffer = await downloadMedia(session.mediaUrl)
      const filename    = await commitToGitHub(imageBuffer, gradeSlug, session.ext)
      sessions.delete(from)
      reply(twiml,
        `✓ Photo saved to *${gradeName}*!\n\nFilename: ${filename}\nVercel will update in ~1 minute.\n\nSend another photo anytime.`
      )

    } else if (session.step === 'awaiting_grade') {
      // Unrecognised reply while awaiting grade
      reply(twiml, `Please reply with a number:\n\n${GRADE_MENU}`)

    } else {
      // Idle — prompt
      reply(twiml, 'Hi! Send me a photo of a shoe and I\'ll add it to the website. 👟')
    }
  } catch (err) {
    console.error(err)
    sessions.delete(from)
    reply(twiml, `❌ Something went wrong: ${err.message}\n\nPlease try sending the photo again.`)
  }

  res.type('text/xml').send(twiml.toString())
})

app.get('/health', (_req, res) => res.json({ ok: true }))

app.listen(PORT, () => console.log(`Bot listening on port ${PORT}`))
