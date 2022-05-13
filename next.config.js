const withPlugins = require('next-compose-plugins')
const withAntdLess = require('next-plugin-antd-less')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  webpack(config) {
    return config
  },
}

const pluginAntdLess = withAntdLess({
  modifyVars: {
    '@primary-color': '#2F4858',
    '@link-color': '#2F4858',
  },
})

module.exports = withPlugins([[pluginAntdLess]], {
  nextConfig,
})
