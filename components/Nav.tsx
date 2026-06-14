'use client'
import { useEffect } from 'react'

export default function Nav() {
  useEffect(() => {
    const nav = document.getElementById('topNav')
    if (!nav) return
    const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className="top-nav" id="topNav">
      <div className="nav-inner">
        <a className="nav-brand" href="#">T.S. Lim Trading</a>
        <ul className="nav-links">
          <li><a href="#collection">Collection</a></li>
          <li><a href="#maker">Maker</a></li>
          <li><a href="#process">Process</a></li>
          <li><a href="#recognition">Recognition</a></li>
          <li><a href="#visit">Visit</a></li>
        </ul>
        <a className="nav-cta" href="#commission">Commission</a>
      </div>
    </nav>
  )
}
