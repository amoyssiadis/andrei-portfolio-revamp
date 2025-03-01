/* eslint-disable @next/next/no-img-element */
import React from 'react'

const TopBar = ({ slice }) => (
  <section style={{ zIndex: 100 }} className="topbar">
    <img
      src={slice.primary.image.url}
      alt={slice.primary.image.alt}
      className="w-full"
    />
  </section>
)

export default TopBar
