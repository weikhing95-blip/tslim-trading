/* eslint-disable @next/next/no-img-element */
export default function Recognition() {
  return (
    <section className="section" id="recognition" style={{ background: 'var(--surface-soft)' }}>
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Recognition</span>
          <h2 className="display-lg">A quiet trail of honours.</h2>
        </div>

        <div className="recognition-grid">
          <article className="rec-card">
            <div className="rec-mark rec-mark--compact">
              <img src="/assets/unesco.svg" alt="UNESCO" />
            </div>
            <div className="year">2012</div>
            <h3>UNESCO Award of Excellence</h3>
            <p>
              UNESCO Asia-Pacific recognition for handicraft excellence —
              authenticity, innovation, and respect for tradition.
            </p>
            <a className="source" href="https://en.unesco.org/" target="_blank" rel="noopener noreferrer">
              UNESCO →
            </a>
          </article>

          <article className="rec-card">
            <div className="rec-mark">
              <img src="/assets/kraftangan-en.svg" alt="Kraftangan Malaysia" />
            </div>
            <div className="year">2012</div>
            <h3>Anugerah Kraf Negara</h3>
            <p>
              Malaysia&apos;s National Craft Award, conferred for sustained
              contribution to a recognised heritage craft.
            </p>
            <a className="source" href="https://www.kraftangan.gov.my/" target="_blank" rel="noopener noreferrer">
              Kraftangan Malaysia →
            </a>
          </article>
        </div>
      </div>
    </section>
  )
}
