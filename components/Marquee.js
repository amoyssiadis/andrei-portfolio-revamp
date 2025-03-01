import React, { useState } from 'react'
import { Marquee as MarqueeLib } from '@devnomic/marquee'

const Marquee = ({ slice, direction }) => {
  const [isPaused, setIsPaused] = useState(false)

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="w-full"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <MarqueeLib
          direction={'left'}
          reverse={direction === 'right'}
          pauseOnHover={true}
          speed={30}
          className={`${isPaused ? 'pause' : ''}`}
        >
          {slice?.items?.map((item, index) => (
            <img
              key={index}
              src={item.image.url}
              alt={item.image.alt}
              className="mx-0 h-4 object-contain md:mx-2 md:h-6"
            />
          ))}
        </MarqueeLib>
      </div>
    </div>
  )
}

export default Marquee
