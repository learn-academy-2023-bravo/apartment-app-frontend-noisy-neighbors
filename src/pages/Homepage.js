
import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';

import home from '../assets/home.png'

const items = [
  {
    src: 'https://hunterkerhart.com/wp-content/uploads/2019/01/VisionOnWilshire-03-1.jpg',
    altText: 'Slide 1',

    key: 1,
  },
  {
    src: 'https://hunterkerhart.com/wp-content/uploads/2019/01/VisionOnWilshire-73.jpg',
    altText: 'Slide 2',
    key: 2,
  },
  {
    src: 'https://hunterkerhart.com/wp-content/uploads/2018/08/Amenity-Room-by-Hunter-Kerhart.jpg',
    altText: 'Slide 3',
    key: 3,
  },
  {
    src: 'https://hunterkerhart.com/wp-content/uploads/2019/01/VisionOnWilshire-66.jpg',
    altText: 'Slide 3',
    key: 4,
  }
];

const Homepage = (args) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={home} alt="Another Image" style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 1, maxHeight: '40vh' }} />
        <img src={item.src} alt={item.altText} style={{ maxHeight: '60vh', width: '100%', objectFit: 'cover'}} />
  
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    )
  })

  return (
    <>
    <div className="carousel-container"></div>


    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      {...args}
    >
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl className="carousel-arrow carousel-arrow-left"
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl className="carousel-arrow carousel-arrow-right"
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
    </>
  )
  }
  
export default Homepage