const express = require('express')
const path = require('path')

const port = 3001
const env = 'development'

const app = express()

app.use('/dt', express.static('dist/pages'))

app.listen(port, () => {
    console.log(`支付收银台测试页面 ${port} 端口以 ${env} 模式运行了`)
})