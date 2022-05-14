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
    '@font-size-base': '16px',
    '@text-color': '#3c3c3c',
    '@heading-color': '#3c3c3c',
    '@body-background': '#f1f1f1',
  },
})

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withPlugins([pluginAntdLess, bundleAnalyzer], {
  nextConfig,
})
