// IDENTIFICAR OS ELEMENTOS DOM (ÁRVORE HTML)
const btnTrocar = document.getElementById('btn-trocar')
const lampada = document.getElementById('lampada')
let baseURL = "https://58a712eb-4aee-4673-9746-dee5952a6741-00-3mwnpwv7uzdoc.kirk.replit.dev/"

btnTrocar.addEventListener('click', function() {
  if (lampada.src = "lampada00.png") {
    lampada.src = "lampada02.png"
  } else {
    lampada.src = "lampada00.png"
  }
})