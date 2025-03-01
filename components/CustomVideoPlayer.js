/**
 * CustomVideoPlayer component
 * Uses vlitejs for video playback
 */
import React, { useEffect, useRef } from 'react'
import 'vlitejs/vlite.css'
import Vlitejs from 'vlitejs'

const CustomVideoPlayer = ({ url }) => {
  const videoRef = useRef(null)

  useEffect(() => {
    if (videoRef.current) {
      new Vlitejs(videoRef.current, {
        autoplay: true,
        controls: true,
        provider: 'html5', // or 'youtube', 'vimeo', etc.
      })
    }
  }, [])

  const defaultWebMUrl =
    'https://andrei-portfolio.cdn.prismic.io/andrei-portfolio/ce1c0eb0-544a-4999-b90b-036ed15337fe_BJORK++DIGITAL-+MAKING+OF+FILTROS+DE+INSTAGRAM.webm'
  const videoUrl = url || defaultWebMUrl
  const videoType = getVideoTypeFromUrl(videoUrl)
  return (
    <video ref={videoRef} className="vlite-js" controls>
      <source src={url} type={`video/${videoType}`} />
      Your browser does not support the video tag.
    </video>
  )
}

export default CustomVideoPlayer

/**
 * Helper function to extract video type from URL
 */
const getVideoTypeFromUrl = (url) => {
  // Use a regular expression to match the file extension
  const match = url.match(/\.(mp4|webm|ogg|avi|mov|mkv)$/i)

  // If a match is found, return the matched extension (without the dot)
  if (match && match[1]) {
    return match[1].toLowerCase()
  }

  // If no match is found, return a default or an error message
  return 'unknown'
}
