import accaActPay_js from '@src/accaActPay.origin.js'
import uikit_js from '@lyufudi/uikit/dist/js/uikit.min.js'
import uikit_css from '@lyufudi/uikit/dist/css/uikit.dove-theme.min.css'

document.write(`
  <link rel="stylesheet" href="${uikit_css}">
  <script src="${accaActPay_js}"></script>
  <script src="${uikit_js}"></script>
  `)

window.addEventListener('DOMContentLoaded', main)

function main() {
  const dom = {
    main: document.querySelector('main'),
    header: document.querySelector('header'),
    footer: document.querySelector('footer')
  }
  dom.main.style.minHeight = setMainMinHeight([dom.header, dom.footer]) + 'px'
  window.addEventListener('resize', e => dom.main.style.minHeight = setMainMinHeight([dom.header, dom.footer]) + 'px')
}

function setMainMinHeight(arr) {
  let height = window.innerHeight
  arr.forEach(el => height = parseInt(height) - parseInt(window.getComputedStyle(el).getPropertyValue('height')))
  return height
}