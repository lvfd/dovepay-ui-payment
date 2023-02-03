const common = require('../dovepay-ui/webpack.common.js')
const { merge } = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = merge(common, {
  name: 'dovepay-ui-payment',
  entry: {
    main: './src/main'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'test/template/account_payment.ejs',
      filename: 'pages/account_payment.html',
      publicPath: '/dovepay-ui-payment/test',
      inject: 'head',
      scriptLoading: 'blocking'
    })
  ],
})