const { merge } = require('webpack-merge')
const common = require('../dove-utils/node/webpack.common')
const path = require('path')

module.exports = merge(common, {
  name: 'dovepay-ui-payment',
  entry: {
    accaActPay: './src/accaActPay',
    accaBankPay: './src/accaBankPay'
  },
  output: {
    path: process.env.NODE_ENV === 'production'?
      path.resolve(__dirname, '..', '..', 'git/dovePay/src/main/webapp/node/dovepay-ui-payment'):
      path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [{
      test: /\.(origin)\.(js|css)$/i,
      type: 'asset/resource',
      generator: {
        filename: 'asset/origin/[name][ext]'
      },
      include: [path.resolve(__dirname, 'src')]
    },
    {
      test: /\.(js|css)$/i,
      type: 'asset/resource',
      generator: {
        filename: 'asset/uikit/[name][ext]'
      },
      include: [path.resolve(__dirname, 'node_modules/@lyufudi/uikit/dist')]
    }]
  }
})