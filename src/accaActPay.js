import accaActPay_js from '@src/accaActPay.origin.js'
import accaPayBankType_js from '@src/accaPayBankType_Banks.origin.js'
import uikit_js from '@lyufudi/uikit/dist/js/uikit.min.js'
import uikit_css from '@lyufudi/uikit/dist/css/uikit.dove-theme.min.css'

document.write(`
  <link rel="stylesheet" href="${uikit_css}">
  <script src="${accaActPay_js}"></script>
  <script src="${uikit_js}"></script>
  `)

window.addEventListener('DOMContentLoaded', main)

function main() {
  try {
    setMainMinHeight()
    bindBankType_Ways()
  } catch(e) {
    console.error(e, e.stack)
  }
}

export function setMainMinHeight() {
  const dom = {
    main: document.querySelector('main'),
    header: document.querySelector('header'),
    footer: document.querySelector('footer')
  }
  dom.main.style.minHeight = getMainMinHeight([dom.header, dom.footer]) + 'px'
  window.addEventListener('resize', e => dom.main.style.minHeight = setMainMinHeight([dom.header, dom.footer]) + 'px')
}

function getMainMinHeight(arr) {
  let height = window.innerHeight
  arr.forEach(el => height = parseInt(height) - parseInt(window.getComputedStyle(el).getPropertyValue('height')))
  return height
}

export function bindBankType_Ways() {
  const el = document.querySelectorAll('#accaPayBankType_ul li a')
  if (el.length < 1) return
  el.forEach( label => {
    label.addEventListener('click', event => event.target.parentNode.querySelector('input').click())
  })
}

import bankInfo from '@lyufudi/dovepay-ui/src/bank-info'
export function bindBankLogo(radio) {
  const arc = document.querySelectorAll(radio)
  if (arc.length < 1) return
  arc.forEach(el => {
    const btn = el.parentNode.querySelector('button')
    btn.addEventListener('click', event => el.click())
    const img = btn.querySelector('img')
    bankInfo.some(el => {
      if (new RegExp(el.regExp).test(img.alt)) {
        img.src = el.logo
        return true
      }
    })
  })
}