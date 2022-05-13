const withPlugins = require('next-compose-plugins')
const withAntdLess = require('next-plugin-antd-less')
const withBundleAnalyzer = require('@next/bundle-analyzer')

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
    '@border-radius-base': '6px',
  },
})

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withPlugins([pluginAntdLess, bundleAnalyzer], {
  nextConfig,
})
