import Image from 'next/image'

export default function Documentary() {
  return (
    <section className="section" id="documentary" style={{ paddingTop: 0 }}>
      <div className="container">
        <a
          className="doc-card"
          href="https://www.youtube.com/watch?v=IUY2bNPh-yI"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="doc-text">
            <span className="eyebrow">Documentary · 2023</span>
            <h2 className="display-md">The work itself.</h2>
            <p>
              A record of the hands, the beads, and the silence between
              them. Filmed at the workshop in Melaka.
            </p>
            <span className="doc-watch">
              Watch on YouTube <span aria-hidden="true">→</span>
            </span>
          </div>
          <div className="doc-thumb">
            <Image
              src="https://img.youtube.com/vi/IUY2bNPh-yI/maxresdefault.jpg"
              alt="Documentary thumbnail"
              fill
              style={{ objectFit: 'cover' }}
              loading="lazy"
            />
          </div>
        </a>
      </div>
    </section>
  )
}
