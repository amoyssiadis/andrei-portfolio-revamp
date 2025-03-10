import React, { useEffect, useRef } from 'react'
import videojs from 'video.js'
import 'video.js/dist/video-js.css'

export const VideoJS = (props) => {
  const videoRef = useRef(null)
  const playerRef = useRef(null)
  const { options, onReady } = props

  useEffect(() => {
    if (!playerRef.current) {
      const videoElement = document.createElement('video-js')

      videoElement.classList.add('vjs-big-play-centered')
      videoRef.current.appendChild(videoElement)

      const player = (playerRef.current = videojs(videoElement, options, () => {
        onReady && onReady(player)
      }))
    } else {
      const player = playerRef.current

      player.autoplay(options.autoplay)
      player.src(options.sources)
    }
  }, [options, videoRef, onReady]) 

  useEffect(() => {
    const player = playerRef.current

    return () => {
      if (player && !player.isDisposed()) {
        player.dispose()
      }
    }
  }, [])

  return <div ref={videoRef} />
}

export default VideoJS
