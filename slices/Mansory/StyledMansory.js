/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import LazyLoad from 'react-lazy-load'

const StyledMansory = ({ slice, openMedia, hoverImage }) => {

  return (
    <div className={'masonry px-4 md:px-20'}>
      {slice?.items?.map((item, i) => {
        const width = item.image.dimensions.width || 850
        const height = item.image.dimensions.height || 400

        return (
          <div className="cursor-pointer p-1" key={i}>
            <a onClick={() => openMedia(item)}>
              <LazyLoad>
                <img
                  className=""
                  src={item.image.url}
                  alt={item.image.alt}
                  width={width}
                  height={height}
                  onMouseOver={(e) =>
                    hoverImage(e, item.image_hover.url || null)
                  }
                  onMouseOut={(e) => hoverImage(e, item.image.url)}
                />
              </LazyLoad>
            </a>
          </div>
        )
      })}
    </div>
  )
}

export default StyledMansory