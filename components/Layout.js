import Head from 'next/head'
import { useRouter } from 'next/router'
import GrainedEffect from './GrainedEffect'

export const Layout = ({
  alternateLanguages,
  navigation,
  settings,
  children,
}) => {
  const router = useRouter()
  const path = router.asPath

  const getBgColor = () => {
    if (path === '/editing' || path === '/pt-br/editing') {
      return 'pb-16 bg-black'
    } else if (path === '/original' || path === '/pt-br/original') {
      return 'pb-16 bg-black'
    } else if (path === '/other' || path === '/pt-br/other') {
      return 'pb-16 bg-black'
    }
    return ''
  }
  const bgColor = getBgColor()

  return (
    <>
      <Head>
        <link
          rel="icon"
          href={settings.data.favicon.url || '/favicon-32x32.png'}
          sizes="any"
        />
      </Head>
      <GrainedEffect>
        <div className="text-[#090709]">
          {/* <Header
        alternateLanguages={alternateLanguages}
        navigation={navigation}
        settings={settings}
      /> */}
          <main
            className={`mx-auto h-full min-h-screen w-screen overflow-x-hidden ${bgColor}`}
          >
            {children}
          </main>
        </div>
      </GrainedEffect>
    </>
  )
}
