import Head from 'next/head'
import { SliceZone } from '@prismicio/react'
import * as prismicH from '@prismicio/helpers'

import { createClient } from '../prismicio'
import { components } from '../slices/'
import { Layout } from '../components/Layout'
import { NextSeo } from 'next-seo'

const Index = ({ page, navigation, settings }) => {
  //console.log({ page })

  return (
    <Layout
      alternateLanguages={page.alternate_languages}
      navigation={navigation}
      settings={settings}
    >
      <NextSeo
        title={
          page.data.seo[0].title ||
          page.data.title ||
          'Andrei Moyssiadis - Filmmaker'
        }
        description={
          page.data.seo[0].description ||
          'Official website of Andrei Moyssiadis - Filmmaker'
        }
        images={[
          {
            url:
              page.data.seo[0].image.url ||
              'https://images.prismic.io/andrei-portfolio/66267a88-12b3-405a-9d2d-666db442ba99_Captura+de+Tela+2023-04-24+a%CC%80s+02.50.52.png?auto=compress,format',
            width: page.data.seo[0].image.width || 1200,
            height: page.data.seo[0].image.height || 800,
            alt: 'Andrei Moyssiadis - Filmmaker',
            type: 'image/jpeg',
          },
        ]}
        openGraph={{
          // url: 'https://www.url.ie/a',
          title:
            page.data.seo[0].title ||
            page.data.title ||
            'Andrei Moyssiadis - Filmmaker',
          description:
            page.data.seo[0].description ||
            'Official website of Andrei Moyssiadis - Filmmaker',
          images: [
            {
              url:
                page.data.seo[0].image.url ||
                'https://images.prismic.io/andrei-portfolio/66267a88-12b3-405a-9d2d-666db442ba99_Captura+de+Tela+2023-04-24+a%CC%80s+02.50.52.png?auto=compress,format',
              width: page.data.seo[0].image.width || 1200,
              height: page.data.seo[0].image.height || 800,
              alt: 'Andrei Moyssiadis - Filmmaker',
              type: 'image/jpeg',
            },
          ],
          siteName: 'Andrei Moyssiadis',
        }}
      />
      <Head>
        <title>{prismicH.asText(page.data.title)}</title>
      </Head>
      <div className="h-[100vh]">
        <SliceZone slices={page.data.slices} components={components} />
      </div>
    </Layout>
  )
}

export default Index

export async function getStaticProps({ locale, previewData }) {
  const client = createClient({ previewData })

  const page = await client.getByUID('page', 'home', { lang: locale })
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
