import React, { useState, useEffect } from 'react'

import './slider.css'

const slideItems = [
  {
    id: 1,
    img: "https://picsum.photos/seed/picsum/200/300?q=1",
    caption: 'caption1'
  },
  {
    id: 2,
    img: "https://picsum.photos/seed/picsum/200/300?q=2",
    caption: 'caption2'
  },
  {
    id: 3,
    img: "https://picsum.photos/seed/picsum/200/300?q=3",
    caption: 'caption3'
  },
  {
    id: 4,
    img: "https://picsum.photos/seed/picsum/200/300?q=4",
    caption: 'caption4'
  },
]

const Page = () => {
  const [slideIndex, setSlideIndex] = useState<number>(0)

  function plusSlides() {
    setSlideIndex(slideIndex + 1)
  }

  function popSlide() {
    setSlideIndex(slideIndex - 1)
  }

  function goSlide(n: number) {
    setSlideIndex(n)
  }

  return <div>
    <div>
      {/* Slideshow container */}
      <div className="slideshow-container">
        {slideItems.map((item, index) => {
          return <div className="mySlides fade" key={item.id} style={{display: slideIndex === index ? 'block' : 'none'}}>
            <div className="numbertext">{index + 1} / {slideItems.length}</div>
            <img src={item.img}  alt="" style={{width: '100%'}} />
            <div className="text">{item.caption}</div>
          </div>
        })}

        {/* Next and previous buttons */}
        {slideIndex >= 1 && <button className="prev" onClick={() => popSlide()}>왼쪽</button>}
        {slideIndex + 1 !== slideItems.length && <button className="next" onClick={() => plusSlides()}>오른쪽</button>}
      </div>
      <br />
      {/* The dots/circles */}
      <div style={{textAlign: 'center'}}>
        {slideItems.map((_, index) => {
          return <span className="dot" onClick={() => goSlide(index)} />
        })}
      </div>
    </div>
  </div>
}

export default Page