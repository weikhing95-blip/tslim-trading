/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'

const grades = [
  {
    tag: 'Grade I · Coarse',
    title: 'Manik Kasar',
    meta: '5–10 days per pair',
    desc: 'Signature Peranakan motifs in coarse glass beads. Drawn from memory, balanced across both shoes without a template.',
    imgSrc: '/assets/photos/collection-detail-960.jpg',
    imgAlt: 'A finished Manik Kasar slipper face, hand-beaded in a floral motif.',
    local: true,
  },
  {
    tag: 'Grade II · Fine',
    title: 'Manik Halus',
    meta: 'Approximately one month',
    desc: 'Finer beadwork at a denser stitch count. The same vocabulary of motifs at a quieter, more saturated level of resolution.',
    imgSrc: '/assets/photos/manik-halus-01.jpg',
    imgAlt: 'Manik Halus — fine bead',
    local: true,
  },
  {
    tag: 'Grade III · Cut Bead',
    title: 'Manek Potong',
    meta: 'Up to two months',
    desc: 'Faceted, hand-cut beads that catch light from every direction. Accepted selectively. The hardest stitch in the workshop.',
    imgSrc: 'https://www.emily2u.com/wp-content/uploads/2019/05/9-TS-Lim.jpg.webp',
    imgAlt: 'Manek Potong — cut bead',
    local: false,
  },
]

export default function Collection() {
  return (
    <section className="section" id="collection">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">The Collection</span>
          <h2 className="display-lg">Three grades of patience.</h2>
          <p>
            Every pair is a commission. Choose by how long it will take — five
            days, one month, or two months — and the maker will draw the
            pattern fresh for you.
          </p>
        </div>

        <div className="grades">
          {grades.map((g) => (
            <article className="grade-card" key={g.title}>
              <div className="grade-img">
                {g.local ? (
                  <Image
                    src={g.imgSrc}
                    alt={g.imgAlt}
                    fill
                    sizes="(max-width: 960px) 100vw, 33vw"
                    style={{ objectFit: 'cover' }}
                    loading="lazy"
                  />
                ) : (
                  <img src={g.imgSrc} alt={g.imgAlt} loading="lazy" />
                )}
              </div>
              <span className="grade-tag">{g.tag}</span>
              <h3 className="display-sm">{g.title}</h3>
              <div className="grade-meta">{g.meta}</div>
              <p>{g.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
