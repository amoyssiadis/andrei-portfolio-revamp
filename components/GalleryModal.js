import { Fragment, useEffect, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import CustomVideoPlayer from './CustomVideoPlayer'
import Image from 'next/image'

export default function GalleryModal({ isOpen, setIsOpen, media }) {
  const [open, setOpen] = useState(isOpen || false)
  const [mediaItem, setMediaItem] = useState(media || null)

  function close() {
    setIsOpen(false)
    setOpen(false)
  }

  useEffect(() => {
    setOpen(isOpen)
    setMediaItem(media)
  }, [isOpen, media])

  useEffect(() => {
    setIsOpen(open)
  }, [open, setIsOpen])

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-50"
        onClose={setOpen}
        initialFocus={null} // Remove o foco inicial no modal
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black transition-opacity" />
        </Transition.Child>

        <div
          className="fixed inset-0 z-10 overflow-y-hidden"
          style={{ scrollBehavior: 'auto' }} 
        >
          <div className="mx-auto flex max-w-7xl items-center justify-center text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative w-full transform overflow-hidden rounded-lg px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:p-6">
                <div className="mb-4 flex w-full items-start justify-between pt-4">
                  {media && media.description && (
                    <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl leading-tight m-0">
                      {media.description}
                    </p>
                  )}
                  <div
                    type="button"
                    className="cursor-pointer text-base font-medium text-white hover:text-gray-400"
                    onClick={() => close()}
                    style={{
                      alignSelf: 'flex-start',
                      marginTop: 0,
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      strokeWidth="0.5"
                      stroke="currentColor"
                      className="h-8 md:h-10 lg:h-12"
                    >
                      <path
                        d="M6 18L18 6M6 6l12 12"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                <div className="player-wrapper inline-flex w-full items-center justify-center px-4 py-2 text-base font-medium text-white">
                  {media && media.media.url ? (
                    <div className="react-player aspect-video h-full w-full text-white">
                      <CustomVideoPlayer url={media.media.url} />
                    </div>
                  ) : (
                    <div className="react-player aspect-video h-full w-full text-white">
                      <Image
                        src={media.image_hover.url}
                        alt={media.image_hover.alt}
                        className="h-full w-full"
                        width={media.image_hover.dimensions.width}
                        height={media.image_hover.dimensions.height}
                      />
                    </div>
                  )}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
