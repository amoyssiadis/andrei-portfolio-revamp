const prismic = require('@prismicio/client')

/** @type {import('next').NextConfig} */
const nextConfig = async () => {
  const client = prismic.createClient('https://andrei-portfolio.cdn.prismic.io/api/v2')

  const repository = await client.getRepository()
  const locales = repository.languages.map((lang) => lang.id)

  return {
    reactStrictMode: true,
    i18n: {
      locales,
      defaultLocale: locales[0],
    },
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'andrei-portfolio.cdn.prismic.io',
        },
        {
          protocol: 'https',
          hostname: 'images.prismic.io',
        },
      ],
    },
  }
}

module.exports = nextConfig