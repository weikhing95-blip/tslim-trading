/* eslint-disable @next/next/no-img-element */
const grades = [
  {
    tag: 'Grade I · Coarse',
    title: 'Manek Kasar',
    price: 'From MYR 388',
    meta: '5–10 days per pair',
    desc: 'Signature Peranakan motifs in coarse glass beads. Drawn from memory, balanced across both shoes without a template.',
    imgSrc: '/assets/photos/manek-kasar-01.jpg',
    imgAlt: 'Manek Kasar — coarse bead sandals in pink with geometric motif.',
  },
  {
    tag: 'Grade II · Fine',
    title: 'Manek Halus',
    price: 'From MYR 980',
    meta: 'Approximately one month',
    desc: 'Finer beadwork at a denser stitch count. The same vocabulary of motifs at a quieter, more saturated level of resolution.',
    imgSrc: '/assets/photos/manek-halus-01.jpg',
    imgAlt: 'Manek Halus — fine bead',
  },
  {
    tag: 'Grade III · Cut Bead',
    title: 'Manek Potong',
    price: 'From MYR 3,500',
    meta: 'Up to two months',
    desc: 'Faceted, hand-cut beads that catch light from every direction. Accepted selectively. The hardest stitch in the workshop.',
    imgSrc: '/assets/photos/manek-potong-01.jpg',
    imgAlt: 'Manek Potong — cut bead',
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
                <img src={g.imgSrc} alt={g.imgAlt} loading="lazy" />
              </div>
              <span className="grade-tag">{g.tag}</span>
              <h3 className="display-sm">{g.title}</h3>
              <div className="grade-price">{g.price}</div>
              <div className="grade-meta">{g.meta}</div>
              <p>{g.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
