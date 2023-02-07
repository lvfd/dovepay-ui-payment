import accaActPay_js from '@src/accaActPay.origin.js'
import accaActPay_css from '@src/accaActPay.origin.css'

document.write(`
  <link rel="stylesheet" href="${accaActPay_css}">
  <script src="${accaActPay_js}"></script>
  `)

window.addEventListener('DOMContentLoaded', main)

function main() {
  console.log('main')
}