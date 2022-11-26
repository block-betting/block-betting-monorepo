/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = {
  nextConfig,
  env: {
    API_URL : process.env.API_URL,
    ALCHEMY_URL_ETHEREUM : process.env.ALCHEMY_URL_ETHEREUM,
    ALCHEMY_URL_GOERLI : process.env.ALCHEMY_URL_GOERLI,
  }
}
