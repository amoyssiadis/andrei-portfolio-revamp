/* eslint-disable @next/next/no-img-element */
import React from 'react'
import LazyLoad from 'react-lazy-load'

const DefaultMansory = ({ slice, openMedia, hoverImage }) => {
  const no_of_columns = Number(slice?.primary?.no_of_columns) || 1
  const myClassName = `mx-auto max-w-5xl gap-0 px-4 md:px-20`

  return (
    <div
      className={myClassName}
      style={{
        columns: no_of_columns,
      }}
    >
      {slice?.items?.map((item, i) => {
        const isClickable = item?.is_clickable || false

        // you might want to use a lib here (eg. react-oembed-container)
        const width = item?.image?.dimensions?.width || 850
        const height = item?.image?.dimensions?.height || 400

        return (
          <div
            className={`${
              isClickable ? 'cursor-pointer' : 'cursor-default'
            } p-1`}
            key={i}
          >
            <a onClick={isClickable ? () => openMedia(item) : undefined}>
              <LazyLoad>
                <img
                  className="w-full"
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

export default DefaultMansory
