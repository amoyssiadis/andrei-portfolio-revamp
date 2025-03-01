/* eslint-disable @next/next/no-img-element */
import * as prismicH from '@prismicio/helpers'
import Head from 'next/head'
import Link from 'next/link'
import GrainedEffect from '../components/GrainedEffect'
import { Layout } from '../components/Layout'
import { createClient } from '../prismicio'

export default function FourOhFour({ page, navigation, settings }) {
  const title =
    prismicH.asText(page.data.title) +
    ' | ' +
    prismicH.asText(settings.data.siteTitle)

  const slice = page?.data?.slices[0]?.primary
  const four0Fourimage =
    slice?.main_image && slice?.main_image?.url
      ? slice.main_image.url
      : '/404.svg'
  const textImage =
    slice?.page_not_found && slice?.page_not_found?.url
      ? slice.page_not_found.url
      : '/pagenotfound.svg'

  return (
    <>
      <Layout
        alternateLanguages={page.alternate_languages}
        navigation={navigation}
        settings={settings}
      >
        <Head>
          <title>{title}</title>
        </Head>
        <GrainedEffect>
          <div className="flex flex-col items-center justify-center    ">
            <div className="flex h-screen w-screen  items-center justify-center bg-[url('/logobg.webp')] text-center  ">
              <Link href="/" legacyBehavior>
                <a>
                  <div className="flex flex-col items-center justify-center px-6">
                    <img
                      alt="Page not Found"
                      src={four0Fourimage}
                      className="sm:w-[400px] 769:w-[600px] 1025:w-[900px]"
                    />
                    <img
                      alt="Click to go back"
                      src={textImage}
                      className="w-[280px] object-contain object-center"
                    />
                  </div>
                </a>
              </Link>
            </div>
          </div>
        </GrainedEffect>
      </Layout>
    </>
  )
}

export async function getStaticProps({ locale, previewData }) {
  const client = createClient({ previewData })

  const page = await client.getByUID('page', '404', { lang: locale })
  const navigation = await client.getSingle('navigation', { lang: locale })
  const settings = await client.getSingle('settings', { lang: locale })

  return {
    props: {
      page,
      navigation,
      settings,
    },
  }
}
