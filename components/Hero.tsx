import Image from 'next/image'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-grid">
        <div className="hero-text">
          <span className="eyebrow">Kasut Manek · Melaka</span>
          <h1 className="display-xl">A pair of shoes, beaded by one hand.</h1>
          <p className="hero-sub">
            Hand-beaded Peranakan shoes from a single workshop on Jalan Tokong,
            Melaka. Drawn from memory, beaded one glass seed at a time, by
            Lim Tian Seng — since 2000.
          </p>
          <div className="hero-actions">
            <a className="btn-primary" href="#collection">
              View the Collection <span aria-hidden="true">→</span>
            </a>
            <a className="btn-secondary" href="#maker">Read his story</a>
          </div>
        </div>
        <div className="hero-illustration-card">
          <Image
            src="/assets/photos/hero-rack-960.jpg"
            alt="Rows of finished Kasut Manek slippers on the workshop racks, in jewel-tone beadwork."
            fill
            sizes="(max-width: 960px) 100vw, 50vw"
            priority
            style={{ objectFit: 'cover' }}
          />
        </div>
      </div>
      <div className="hero-meta">
        <span>UNESCO Award of Excellence · 2012</span>
        <span>Est. 2000 · 63 Jalan Tokong</span>
      </div>
    </section>
  )
}
