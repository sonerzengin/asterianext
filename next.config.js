/** @type {import('next').NextConfig} */

const { i18n } = require('./next-i18next.config');
const webpack = require('webpack');

const nextConfig = {
  i18n,
  reactStrictMode: true,
  swcMinify: true,
  
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.plugins.push(
     new webpack.ProvidePlugin({
     $: 'jquery',
     jQuery: 'jquery',
     'window.jQuery': 'jquery',
  }));
 return config;
},
}

module.exports = nextConfig ;
