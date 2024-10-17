// INDETIFICAR OS ELEMENTOS HTML
const menu = document.querySelector('.Menu');
const vermelho = document.querySelector('#vermelho');
const azul = document.querySelector('#azul');
const verde = document.querySelector('#verde');
const amarelo = document.querySelector('#amarelo');
const box = document.querySelector('.box');
const texto = document.querySelector('#texto');

//MANIPULAR ESSES ELEMENTOS
vermelho.addEventListener('click', function() {
  box.style.backgroundColor = '#e12d2d';
  texto.style.color = '#ffff';
})

azul.addEventListener('click', function() {
  box.style.backgroundColor = '#2054ee';
  texto.style.color = '#ffff';
})

verde.addEventListener('click', function() {
  box.style.backgroundColor = '#21d445';
  texto.style.color = '#ffff';
})

amarelo.addEventListener('click', function() {
  box.style.backgroundColor = '#f0e033';
  texto.style.color = '#ffff';
})
