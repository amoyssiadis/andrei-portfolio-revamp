import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function GoToTop() {
  const [clientWindowHeight, setClientWindowHeight] = useState()
  const [show, setShow] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  })

  const handleScroll = () => {
    setClientWindowHeight(window.scrollY)
  }

  useEffect(() => {
    // console.log({ clientWindowHeight })
    if (clientWindowHeight > 50) {
      setShow(true)
    } else {
      setShow(false)
    }
  }, [clientWindowHeight])
  const router = useRouter()
  if (router.asPath === '/' || router.asPath === '/pt-br') return null
  return (
    <>
      {show && (
        <div
          style={{
            zIndex: 40,
          }}
          className="filter-white fixed bottom-0 left-0 scale-50 text-white sm:bottom-6 sm:left-2 lg:bottom-8 1025:left-16"
        >
          <a href="#">
            <Image src="/gototop.svg" width={74} height={120} alt="Go to Top" />
          </a>
        </div>
      )}
    </>
  )
}
