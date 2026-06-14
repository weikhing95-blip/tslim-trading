'use client'

const pressItems = [
  {
    href: 'https://www.nst.com.my/lifestyle/jom/2018/01/328616/go-beads-love-nsttv',
    imgSrc: '/assets/press-nst.png',
    imgAlt: 'New Straits Times',
    fallback: 'New Straits Times',
    meta: 'Jan 2018',
  },
  {
    href: 'https://www.smh.com.au/traveller/inspiration/things-to-do-in-melaka-malaysia-the-threeminute-guide-20180711-h12jdk.html',
    imgSrc: '/assets/press-smh.svg',
    imgAlt: 'Sydney Morning Herald',
    fallback: 'Sydney Morning Herald',
    meta: 'Jul 2018 · Traveller',
  },
  {
    href: 'https://www.malaymail.com/news/life/2022/02/18/melaka-beaded-shoemaker-hopes-borders-reopen-so-tourists-can-continue-suppo/2042412',
    imgSrc: '/assets/press-malaymail.svg',
    imgAlt: 'Malay Mail',
    fallback: 'Malay Mail',
    meta: 'Feb 2022',
  },
  {
    href: 'https://malaysia.news.yahoo.com/melaka-beaded-shoemaker-hopes-borders-065417437.html',
    imgSrc: '/assets/press-yahoo.svg',
    imgAlt: 'Yahoo News',
    fallback: 'Yahoo News',
    meta: 'Feb 2022',
  },
  {
    href: 'https://www.thestar.com.my/lifestyle/culture/2023/06/08/the-bendahari-in-melaka-leads-a-community-initiative-to-showcase-heritage-trades',
    imgSrc: '/assets/press-thestar.svg',
    imgAlt: 'The Star',
    fallback: 'The Star',
    meta: 'Jun 2023',
  },
]

export default function Press() {
  return (
    <section className="section" id="press" style={{ paddingTop: 0 }}>
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">As seen in</span>
          <h2 className="display-lg">A quiet trail in print.</h2>
        </div>

        <div className="press-strip">
          {pressItems.map((item) => (
            <a
              key={item.href}
              className="press-item"
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="press-logo">
                <img
                  src={item.imgSrc}
                  alt={item.imgAlt}
                  onError={(e) => {
                    const img = e.currentTarget
                    img.style.display = 'none'
                    const next = img.nextElementSibling as HTMLElement
                    if (next) next.style.display = 'inline-block'
                  }}
                />
                <span className="press-logo-text" style={{ display: 'none' }}>
                  {item.fallback}
                </span>
              </span>
              <span className="press-meta">{item.meta}</span>
            </a>
          ))}
        </div>

        <div className="press-archive">
          <span className="press-archive-label">Further reading</span>
          <a href="https://www.emily2u.com/a-stitch-back-in-time/" target="_blank" rel="noopener noreferrer">
            Emily2u — A Stitch Back In Time (2019)
          </a>
          <a href="https://parvezish.com/travel/handmade-nyonya-beaded-shoes-malacca/" target="_blank" rel="noopener noreferrer">
            Parvez Shaikh — The Dying Art of Handmade Nyonya Beaded Shoes (2018)
          </a>
        </div>
      </div>
    </section>
  )
}
