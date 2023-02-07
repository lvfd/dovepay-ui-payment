const express = require('express')
const path = require('path')

const ejs = require('ejs')

const port = 3001
const env = 'development'

const app = express()

app.set('view engine', 'html')
app.engine('html', ejs.__express)
app.set('views', path.resolve(__dirname, 'template'))

app.use('/dt/dist', express.static(path.resolve(__dirname, 'dist')))
app.get('/dt/1', (req, res) => {
    res.render('accaActPay')
})

app.listen(port, () => {
    console.log(`支付收银台测试页面 ${port} 端口以 ${env} 模式运行了`)
})