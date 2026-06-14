import Image from 'next/image'

export default function Maker() {
  return (
    <section className="section" id="maker" style={{ paddingTop: 0 }}>
      <div className="maker-band">
        <div className="maker-grid">
          <div className="maker-text">
            <span className="eyebrow">The Maker</span>
            <h2 className="display-lg">
              Lim Tian Seng. <br />Half a century with beads in hand.
            </h2>
            <p>
              He apprenticed at fourteen, opened the shop on Jalan Tokong in
              2000, and has been beading there every day since. There is no
              assistant. The pattern, the colour selection, the stitching —
              all of it is his hand.
            </p>
            <p>
              He is the last maker in Melaka who designs and beads the Manik
              face himself.
            </p>

            <div className="maker-fact-row">
              <div className="maker-fact">
                <div className="label">Bench since</div>
                <div className="value">2000</div>
              </div>
              <div className="maker-fact">
                <div className="label">Pairs per month</div>
                <div className="value">≈ 70</div>
              </div>
              <div className="maker-fact">
                <div className="label">Successor</div>
                <div className="value">None</div>
              </div>
            </div>
          </div>
          <div className="maker-portrait">
            <Image
              src="/assets/photos/maker-portrait-960.jpg"
              alt="Lim Tian Seng at his workbench, holding a beading frame, with the Anugerah Kraf Negara certificate on the wall behind him."
              fill
              sizes="(max-width: 960px) 100vw, 45vw"
              style={{ objectFit: 'cover' }}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
