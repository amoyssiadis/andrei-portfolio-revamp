import { useRouter } from 'next/router'
import React, { useState } from 'react'
import GalleryModal from '../../components/GalleryModal'
import Sidesideportfoliomenu from '../../components/SidePortfolioMenu'
import DefaultMansory from './DefaultMansory'
import StyledMansory from './StyledMansory'

const Mansory = ({ slice }) => {
  const [modalOpen, setModalOpen] = useState(false)
  const [modalMedia, setModalMedia] = useState(null)

  const router = useRouter()
  const path = router.asPath

  function openMedia(item) {
    setModalMedia(item)
    setModalOpen(true)
  }

  function hoverImage(e, url) {
    //change the src of the image
    if (url && e.target.src !== url) {
      e.target.src = url
    }
  }

  return (
    <section className="bg-black">
      <Sidesideportfoliomenu />
      {path === '/editing' ? (
        <StyledMansory
          slice={slice}
          hoverImage={hoverImage}
          openMedia={openMedia}
        />
      ) : (
        <DefaultMansory
          slice={slice}
          hoverImage={hoverImage}
          openMedia={openMedia}
        />
      )}
      {modalMedia && (
        <GalleryModal
          media={modalMedia}
          isOpen={modalOpen}
          setIsOpen={setModalOpen}
        />
      )}
    </section>
  )
}

export default Mansory
