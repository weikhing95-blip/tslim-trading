'use client'
/* eslint-disable @next/next/no-img-element */
import { useRef, useState, useCallback } from 'react'

export default function GradeCarousel({ images, alt }: { images: string[]; alt: string }) {
  const trackRef = useRef<HTMLDivElement>(null)
  const [current, setCurrent] = useState(0)

  const scrollTo = useCallback((index: number) => {
    const track = trackRef.current
    if (!track) return
    const clamped = Math.max(0, Math.min(index, images.length - 1))
    track.scrollTo({ left: clamped * track.clientWidth, behavior: 'smooth' })
    setCurrent(clamped)
  }, [images.length])

  const onScroll = useCallback(() => {
    const track = trackRef.current
    if (!track) return
    const index = Math.round(track.scrollLeft / track.clientWidth)
    setCurrent(index)
  }, [])

  if (images.length === 0) return null

  if (images.length === 1) {
    return <img src={images[0]} alt={alt} loading="lazy" />
  }

  return (
    <div className="carousel-wrap">
      <div className="carousel-track" ref={trackRef} onScroll={onScroll}>
        {images.map((src, i) => (
          <img key={src} src={src} alt={`${alt} — photo ${i + 1}`} loading="lazy" />
        ))}
      </div>

      <button
        className="carousel-btn carousel-prev"
        onClick={() => scrollTo(current - 1)}
        aria-label="Previous photo"
        disabled={current === 0}
      >
        ‹
      </button>
      <button
        className="carousel-btn carousel-next"
        onClick={() => scrollTo(current + 1)}
        aria-label="Next photo"
        disabled={current === images.length - 1}
      >
        ›
      </button>

      <div className="carousel-dots">
        {images.map((_, i) => (
          <button
            key={i}
            className={`carousel-dot${i === current ? ' active' : ''}`}
            onClick={() => scrollTo(i)}
            aria-label={`Go to photo ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
