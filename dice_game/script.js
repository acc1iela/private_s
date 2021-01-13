'use strict';

const firstPlayer = document.querySelector('.player--0');
const secondPlayer = document.querySelector('.player--1');
const firstPlayerScore = document.querySelector('#score--0');
const secondPlayerScore = document.getElementById('score--1');
const firstCurrentScore = document.getElementById('current--0');
const secondCurrentScore = document.getElementById('current--1');

const dice = document.querySelector('.dice');
const restart = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn-roll');
const btnHold = document.querySelector('.btn--hold');

let scores, currentScore, activePlayer, playing;

// 初期化関数
const init = (() => {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  firstPlayerScore.textContent = 0;
  secondPlayerScore.textContent = 0;
  firstCurrentScore.textContent = 0;
  firstCurrentScore.textContent = 0;

  dice.classList.add('hidden');
  firstPlayer.classList.remove('player--winner').add('player--active');
  secondPlayer.classList.remove('player--winner player--active');
})();
