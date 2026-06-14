import Image from 'next/image'

const steps = [
  {
    num: 'Step 01',
    title: 'Pattern',
    desc: 'The motif is drawn by hand on tracing paper, balanced across both shoes without symmetry tools — peonies, phoenixes, butterflies, lattice borders.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="3" width="14" height="18" rx="1"/>
        <path d="M7 10c1.5-1.5 3 1.5 4.5 0s2-1 2-1"/>
        <path d="M7 14c1.5-1.5 3 1.5 4.5 0"/>
        <circle cx="14.5" cy="6.5" r="0.7" fill="currentColor" stroke="none"/>
      </svg>
    ),
  },
  {
    num: 'Step 02',
    title: 'Bead selection',
    desc: 'Glass seed beads sourced by the gross, sorted by hand under daylight. Colour is chosen to age — Peranakan palettes deepen, they do not fade.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="6" cy="12" r="2.6"/>
        <circle cx="12" cy="12" r="2.6"/>
        <circle cx="18" cy="12" r="2.6"/>
      </svg>
    ),
  },
  {
    num: 'Step 03',
    title: 'Stitching',
    desc: 'One bead, one stitch, repeated for the count of the design. A Manek Halus face holds upwards of twelve thousand beads.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5.5 18.5L18 6"/>
        <path d="M15.5 3.5l4.5 4.5"/>
        <circle cx="5.5" cy="18.5" r="1.3"/>
        <path d="M9 13l-2 2"/>
      </svg>
    ),
  },
  {
    num: 'Step 04',
    title: 'Lasting',
    desc: 'The beaded face is shaped over a wooden last, lined, and attached to the sole — leather or fabric, finished by the maker\'s own hand.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 15c0-3 3-7 8-7 4 0 9 1 9 3.5 0 2-3 2.5-5 2.5-2 0-3 0.5-4 1.5s-3 1-5 1c-2 0-3-0.5-3-1.5z"/>
      </svg>
    ),
  },
  {
    num: 'Step 05',
    title: 'Provenance',
    desc: 'Each pair leaves with a hand-written card noting the grade, the bead count, and the dates the work began and ended.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 3h9l3 3v15H6z"/>
        <path d="M15 3v3h3"/>
        <path d="M9 11h6M9 14h6M9 17h3"/>
      </svg>
    ),
  },
]

export default function Process() {
  return (
    <section className="section" id="process">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">The Craft</span>
          <h2 className="display-lg">Five steps. One pair of shoes.</h2>
        </div>

        <div className="process-hero">
          <Image
            src="/assets/photos/process-beading-960.jpg"
            alt="Lim Tian Seng beading at his workbench, embroidery hoop in hand, in front of a wall of in-progress shoe faces."
            fill
            sizes="(max-width: 960px) 100vw, 1200px"
            style={{ objectFit: 'cover' }}
            loading="lazy"
          />
        </div>

        <div className="process-list">
          {steps.map((s) => (
            <div className="process-step" key={s.num}>
              <div className="icon-circle" aria-hidden="true">
                {s.icon}
              </div>
              <div className="step-label">
                <div className="step-num">{s.num}</div>
                <h3>{s.title}</h3>
              </div>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
