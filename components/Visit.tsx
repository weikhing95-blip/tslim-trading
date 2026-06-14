export default function Visit() {
  return (
    <section className="section" id="visit">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">The Atelier</span>
          <h2 className="display-lg">63 Jalan Tokong, Melaka.</h2>
        </div>
        <div className="visit-grid">
          <div className="visit-info">
            <div className="visit-row">
              <div className="visit-label">Hours</div>
              <div className="visit-value">Daily · 10:00 — 16:00</div>
            </div>
            <div className="visit-row">
              <div className="visit-label">Address</div>
              <div className="visit-value">
                63 Jalan Tokong (Temple Street)<br />75200 Melaka, Malaysia
              </div>
            </div>
            <div className="visit-row">
              <div className="visit-label">Phone</div>
              <div className="visit-value">
                <a href="tel:+60166186989">+60 16-618 6989</a>
              </div>
            </div>
            <div className="visit-row">
              <div className="visit-label">Email</div>
              <div className="visit-value">
                <a href="mailto:tslim1961@yahoo.com.sg">tslim1961@yahoo.com.sg</a>
              </div>
            </div>
          </div>
          <iframe
            className="visit-map"
            src="https://maps.google.com/maps?q=63+Jalan+Tokong,+75200+Melaka,+Malaysia&output=embed"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="T.S. Lim Trading on the map"
          />
        </div>
      </div>
    </section>
  )
}
