import { Fragment, useEffect, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XCircleIcon } from '@heroicons/react/24/outline'
import Head from 'next/head'

const ColorfulMenu = ({ menuBgImage }) => {
  const bgImage =
    menuBgImage && menuBgImage?.url ? menuBgImage.url : '/bgworkmenu.gif'
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current

    const background = document.createElement('div')
    background.style.position = 'absolute'
    background.style.top = '0'
    background.style.left = '0'
    background.style.width = '100%'
    background.style.height = '100%'
    background.style.backgroundImage = `url(${bgImage})`
    background.style.backgroundSize = '500%'
    background.style.backgroundRepeat = 'no-repeat'
    background.style.backgroundPosition = 'center'
    container.appendChild(background)

    const blackLayer = document.createElement('div')
    blackLayer.style.backgroundColor = 'black'
    blackLayer.style.position = 'absolute'
    blackLayer.style.top = '0'
    blackLayer.style.left = '0'
    blackLayer.style.width = '100%'
    blackLayer.style.height = '100%'
    blackLayer.style.opacity = '1'
    container.appendChild(blackLayer)

    const list = document.createElement('ul')
    list.style.listStyleType = 'none'
    list.style.textAlign = 'center'
    list.style.color = 'white'
    list.style.fontFamily = 'sans-serif'
    list.style.fontWeight = 'bold'
    list.style.fontSize = '100px'
    list.style.textTransform = 'uppercase'
    list.style.position = 'absolute'
    list.style.top = '50%'
    list.style.left = '50%'
    list.style.transform = 'translate3d(-50%, -50%, 0)'
    list.style.margin = '0'
    list.style.padding = '0'
    list.className = 'portfoliomenu-sprite'

    // create onclick links on each li item below
    const link1 = document.createElement('a')
    link1.href = '/editing'
    link1.appendChild(document.createElement('li')).className = 'editing'

    const link2 = document.createElement('a')
    link2.href = '/original'
    link2.appendChild(document.createElement('li')).className = 'original'

    const link3 = document.createElement('a')
    link3.href = '#'
    link3.appendChild(document.createElement('li')).className = 'other'

    list.appendChild(link1)
    list.appendChild(link2)
    list.appendChild(link3)
    blackLayer.appendChild(list)

    blackLayer.style.mixBlendMode = 'darken'

    const list2 = list.cloneNode(true)
    container.appendChild(list2)

    list2.addEventListener(
      'mouseover',
      function (event) {
        if (event.target.tagName === 'LI') {
          event.target.style.opacity = '0'
          event.target.style.transition = 'opacity 0.5s'
        }
      },
      false
    )

    list2.addEventListener(
      'mouseout',
      function (event) {
        if (event.target.tagName === 'LI') {
          event.target.style.opacity = '1'
          event.target.style.transition = 'opacity 0.5s'
        }
      },
      false
    )

    list2.addEventListener(
      'mousedown',
      function (event) {
        if (event.target.tagName === 'LI') {
          event.target.style.userSelect = 'none'
        }
      },
      false
    )

    return () => {
      if (container) container.innerHTML = ''
    }
  }, [bgImage])

  return <div ref={containerRef} />
}

export default function MenuModal({ isOpen, setIsOpen, menuBgImage }) {
  const [open, setOpen] = useState(isOpen || false)
  const bgImage = menuBgImage && menuBgImage?.url ? menuBgImage.url : '/bgworkmenu.gif'

  function close() {
    setIsOpen(false)
    setOpen(false)
  }
  useEffect(() => {
    setOpen(isOpen)
  }, [isOpen])

  useEffect(() => {
    setIsOpen(open)
  }, [open, setIsOpen])

  return (
    <>
      <Head>
        <link rel="preload" as="image" href={bgImage} fetchpriority="high" />
      </Head>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-2500"
            enterFrom="opacity-0 translate-x-full "
            enterTo="opacity-100 translate-x-0"
            leave="ease-in duration-2500"
            leaveFrom="opacity-100 translate-x-0"
            leaveTo="opacity-0 translate-x-full"
          >
            <div className="fixed inset-0 bg-black transition-all" />
          </Transition.Child>

          <div className="fixed inset-0 z-10">
            <div className="flex min-h-full min-w-full 426:justify-end items-center text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-500"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-500"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative h-screen w-full transform rounded-lg px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:w-full sm:max-w-sm sm:p-6">
                  <div className="inline-flex w-full justify-end">
                    <div
                      type="button"
                      className="z-40 cursor-pointer px-4 py-2 text-base font-medium text-white"
                      onClick={() => close()}
                    >
                      <XCircleIcon className="w-12 h-12 md:w-20 md:h-20" />
                    </div>
                  </div>
                  <div className="-mt-40 -ml-5 340:-ml-8 431:-ml-28 mr-28 h-full w-full sm:-mt-10 sm:ml-9 ">
                    <div className="portfoliomenu h-full w-full scale-[1.5] sm:scale-[2] ">
                      <div className="">
                        <ColorfulMenu menuBgImage={menuBgImage} />
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  )
}
