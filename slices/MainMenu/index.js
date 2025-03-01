import React, { useState } from 'react'
import * as prismicH from '@prismicio/helpers'
import { Bounded } from '../../components/Bounded'
import { PrismicNextImage } from '@prismicio/next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import MenuModal from '../../components/MenuModal'
import Alert from '../../components/Alert'
import useWindowDimensions from '../../lib/useWindowDimensions'
import GoToTop from '../../components/GoToTop'
import { PrismicLink } from '@prismicio/react'

const MainMenu = ({ slice }) => {
  const router = useRouter()
  const style = router.asPath === '/' ? 'h-screen -mt-24' : ''
  const [modalOpen, setModalOpen] = useState(false)
  const [alertOpen, setAlertOpen] = useState(false)
  const email = 'andrei@andrei.com.br'
  const { width, height } = useWindowDimensions()
  const workMenuBgImage = slice?.primary?.work_menu_bg

  // GALERY DESKTOP MAIN MENU
  if (slice.variation === 'gallery' && width > 1000) {
    return (
      <Bounded as="section" className="overflow-hidden bg-black py-10" style={{ zIndex: 0 }}>
        <div className={`${style} flex flex-row items-center justify-center px-8`} style={{ zIndex: -10 }}>
          <div className="flex flex-col py-4 sm:order-last" style={{ zIndex: 0 }}>
            <div className="">
              <ul className="langsprite-gallery filter-white" style={{ zIndex: 0 }}>
                <PrismicLink href={router.asPath} locale="en-us">
                  <li className="en"></li>
                </PrismicLink>
                <li className="spacer"></li>
                <PrismicLink href={router.asPath} locale="pt-br">
                  <li className="pt"></li>
                </PrismicLink>
              </ul>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center" style={{ zIndex: 0 }}>
            <div className="w-[300px]">
              <Link href="/" legacyBehavior>
                <a>
                  {prismicH.isFilled.image(slice.primary.logo) && (
                    <PrismicNextImage alt=""
                      field={slice.primary.logo}
                      className="filter-white"
                      layout="responsive"
                    />
                  )}
                </a>
              </Link>
            </div>
          </div>
          <div className="navbar-gallery scale-[0.56] sm:scale-[0.9]" style={{ zIndex: 0 }}>
            <ul className="navsprite-gallery filter-white">
              <a onClick={() => setModalOpen(true)}>
                <li className={router.asPath == '/original' ? 'active work' : 'work'}></li>
              </a>
              <Link href="/info" legacyBehavior>
                <a>
                  <li className={router.asPath == '/info' ? 'active info' : 'info'}></li>
                </a>
              </Link>
              <a>
                <li className="contact" onClick={() => {
                  navigator.clipboard.writeText(email)
                  setAlertOpen(true)
                }}></li>
              </a>
              <a href="https://instagram.com/amoyssiadis" target="_blank" rel="noopener noreferrer">
                <li className="instagram"></li>
              </a>
            </ul>
            <Alert email={email} isOpen={alertOpen} setIsOpen={setAlertOpen} variation={slice.variation} style={{ zIndex: 0 }} />
          </div>
          <GoToTop style={{ zIndex: 80 }} />
          <MenuModal isOpen={modalOpen} setIsOpen={setModalOpen} menuBgImage={workMenuBgImage} style={{ zIndex: 0 }} />
        </div>
      </Bounded>
    )
  }

  const logoWidth = width < 360 ? width - 20 : width - 40
  const bg = slice.variation === 'gallery' ? 'bg-black' : ''
  const filter = slice.variation === 'gallery' ? 'filter-white' : ''
  const isInfo = router.asPath == '/info' ? ' scale-[0.85] ' : ''
  const bgUrl = slice.primary.bgImg && slice.primary.bgImg.url ? slice.primary.bgImg.url : '/logobg.webp'
  const bgColor = slice.variation === 'gallery' ? {} : { backgroundImage: `url(${bgUrl})` }
  const logoStyles = width < 431 ? { width: `${logoWidth}px` } : {}

  const styles = {
    ...bgColor,
    ...logoStyles,
  }

  return (
    <div className="" style={{ zIndex: 0 }}>
      <Bounded as="section" className={`pt-4 md:pt-0 ${bg}`} style={{ zIndex: 0 }}>
        <div className={`${style} mx-auto flex w-full flex-col items-center justify-center ${isInfo}`} style={{ zIndex: 0 }}>
          <div className="mb-2 flex flex-col sm:mb-12" style={{ zIndex: 0 }}>
            <div className="langsel scale-[0.56] sm:ml-0 sm:transform-none">
              <ul className={`langsprite ${filter} w-[800px] 321:w-[900px] 375:w-[1000px] 400:w-[1100px] 431:w-[900px] sm:w-[1000px]`} style={{ zIndex: 0 }}>
                <PrismicLink href={router.asPath} locale="en-us">
                  <li className="en"></li>
                </PrismicLink>
                <li className="spacer"></li>
                <PrismicLink href={router.asPath} locale="pt-br">
                  <li className="pt"></li>
                </PrismicLink>
              </ul>
            </div>
          </div>
          <div className="flex w-full flex-col items-center justify-center" style={{ zIndex: 0 }}>
            <div className={`-my-4 rounded-2xl px-4 py-4 431:w-[325px] sm:w-[630px]`} style={{ ...styles, zIndex: 0 }}>
              <Link href="/" legacyBehavior>
                <a>
                  {prismicH.isFilled.image(slice.primary.logo) && (
                    <PrismicNextImage alt=""
                      field={slice.primary.logo}
                      className={` ${filter} `}
                      layout="responsive"
                    />
                  )}
                </a>
              </Link>
            </div>
          </div>
          <div style={{ zIndex: 0 }}>
            <div className="mt-8 w-[800px] scale-[0.56] 321:w-[900px] 375:w-[1000px] 400:w-[1100px] 431:w-[900px] sm:mt-12 sm:w-[1000px] sm:transform-none">
              <ul className={`navsprite ${filter}`} style={{ zIndex: 0 }}>
                <a onClick={() => setModalOpen(true)}>
                  <li className={router.asPath == '/original' ? 'active work' : 'work'}></li>
                </a>
                <Link href="/info" legacyBehavior>
                  <a>
                    <li className={router.asPath == '/info' ? 'active info' : 'info'}></li>
                  </a>
                </Link>
                <a>
                  <li className="contact" onClick={() => {
                    try {
                      navigator.clipboard.writeText(email)
                      setAlertOpen(true)
                    } catch (e) {
                      console.log(e)
                    }
                  }}></li>
                </a>
                <a href="https://instagram.com/amoyssiadis" target="_blank" rel="noopener noreferrer">
                  <li className="instagram"></li>
                </a>
              </ul>
            </div>
          </div>
          <Alert email={email} isOpen={alertOpen} setIsOpen={setAlertOpen} variation={slice.variation} style={{ zIndex: 0 }} />
          {router.asPath !== '/' && router.asPath !== '/info' && router.asPath !== '/pt-br' && <GoToTop style={{ zIndex: 0 }} />}
          <MenuModal isOpen={modalOpen} setIsOpen={setModalOpen} menuBgImage={workMenuBgImage} style={{ zIndex: 0 }} />
        </div>
      </Bounded>
    </div>
  )
}

export default MainMenu