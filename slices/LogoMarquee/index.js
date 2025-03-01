import React, { useState } from 'react'
import Marquee from '../../components/Marquee'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import { AnimatePresence, motion } from 'framer-motion'

const LogoMarquee = ({ slice }) => {
  const [direction, setDirection] = useState('left')

  return (
    <section className="mt-10 h-full w-full p-1">
      <AnimatePresence mode="wait" initial={true}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            delay: 0.2,
            duration: 0.8,
          }}
          className="relative w-full sm:absolute sm:bottom-8"
        >
          <p className="my-4 text-center text-xs font-bold tracking-wider sm:text-lg">
            {slice.primary.title}
          </p>
          <div className="mx-auto flex max-w-5xl items-center justify-center px-4 sm:px-8 md:px-12">
            <ChevronLeftIcon
              className="h-8 min-w-[50px] cursor-pointer sm:h-12 md:h-16"
              onClick={() => setDirection('left')}
            />
            <Marquee slice={slice} direction={direction} />
            <ChevronRightIcon
              className="h-8 min-w-[50px] cursor-pointer sm:h-12 md:h-16"
              onClick={() => setDirection('right')}
            />
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  )
}

export default LogoMarquee
