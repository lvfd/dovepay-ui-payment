const common = require('../dovepay-ui/webpack.common.js')
const { merge } = require('webpack-merge')
const path = require('path')

module.exports = merge(common, {
  name: 'dovepay-ui-payment',
  entry: {
    accaActPay: './src/accaActPay',
    accaBankPay: './src/accaBankPay'
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