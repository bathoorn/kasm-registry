/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'bathoorn Kasm registry',
    description: 'custom workspaces.',
    icon: '/img/logo.svg',
    listUrl: 'https://bathoorn.github.io/kasm-registry/',
    contactUrl: 'https://github.com/bathoorn/kasm-registry/issues',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
