import React from 'react'
import { PrismicNextImage } from '@prismicio/next'
import * as prismicH from '@prismicio/helpers'

const FloatingImage = ({ slice }) => {
  const FloatImgDivRef = React.useRef(null)
  const closeImage = (evt) => {
    // console.log(evt)
    if (FloatImgDivRef.current) {
      FloatImgDivRef.current.className =
        'opacity-0 pointer-events-auto  mt-20 w-[150px] sm:w-[200px] cursor-pointer md:mt-8'
    }
  }
  return (
    <div
      className="pointer-events-auto  mt-20 w-[150px] cursor-pointer sm:w-[200px] md:mt-8"
      onClick={closeImage}
      ref={FloatImgDivRef}
    >
      {slice.primary.image && prismicH.isFilled.image(slice.primary.image) && (
        <PrismicNextImage alt="" field={slice.primary.image} layout="responsive" />
      )}
    </div>
  )
}

export default FloatingImage
