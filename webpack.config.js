const common = require('../dovepay-ui/webpack.common.js')
const { merge } = require('webpack-merge')
const path = require('path')

module.exports = merge(common, {
  name: 'dovepay-ui-payment',
  entry: {
    main: './src/main'
  },
  module: {
    rules: [{
      test: /\.(origin)\.(js|css)$/i,
      type: 'asset/resource',
      generator: {
        filename: 'asset/origin/[name][ext]'
      },
      include: [path.resolve(__dirname, 'src')]
    }]
  }
})