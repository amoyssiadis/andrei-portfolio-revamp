import React from 'react'
import { PrismicRichText } from '@prismicio/react'
//import { PrismicLink } from '@prismicio/react'
import FloatingImage from '../FloatingImage'
import { AnimatePresence, motion } from 'framer-motion'

// import * as prismicH from "@prismicio/helpers";

const AboutTextWithButton = ({ slice }) => (
  <section>
    <AnimatePresence mode="wait" initial={true}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          delay: 0.2,
          duration: 0.8,
        }}
        className=""
      >
        <div className="min-w-screen mx-auto mt-4 max-w-[1200px] px-4 sm:mt-4 md:mt-8">
          <div className="px-6 sm:pl-8 sm:pr-8 flex justify-center">
            <div className="max-w-[940px] font-bold tracking-wider sm:pr-20 sm:text-lg">
              <PrismicRichText field={slice.primary.about} />
            </div>
          </div>
          {/* <div className=" right-10 mx-auto mt-10 hidden w-fit md:block  lg:mt-0 lg:mr-10 ">
            <FloatingImage slice={slice} />
          </div> */}
        </div>
      </motion.div>
    </AnimatePresence>
  </section>
)

export default AboutTextWithButton
