'use strict';

const firstPlayer = document.querySelector('.player--0');
const secondPlayer = document.querySelector('.player--1');
const firstPlayerScore = document.querySelector('#score--0');
const secondPlayerScore = document.getElementById('score--1');
const firstCurrentScore = document.getElementById('current--0');
const secondCurrentScore = document.getElementById('current--1');

const dice = document.querySelector('.dice');
const restart = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let scores, currentScore, activePlayer, playing;

// 初期化関数
const init = () => {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  firstPlayerScore.textContent = 0;
  secondPlayerScore.textContent = 0;
  firstCurrentScore.textContent = 0;
  firstCurrentScore.textContent = 0;

  dice.classList.add('hidden');
  firstPlayer.classList.remove('player--winner');
  secondPlayer.classList.remove('player--winner', 'player--active');
  firstPlayer.classList.add('player--active');
};
init();

// プレイヤー変更
const switchPlayer = () => {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  firstPlayer.classList.toggle('player--active');
  secondPlayer.classList.toggle('player--active');
};

// サイコロコロ
btnRoll.addEventListener('click', () => {
  if (playing) {
    const diceNum = Math.trunc(Math.random() * 6) + 1;

    dice.classList.remove('hidden');
    dice.src = `dice-${diceNum}.png`; // 1~6の数字に応じて画像が表示される

    if (diceNum !== 1) {
      currentScore += diceNum;
      document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    } else {
      switchPlayer(); // もし数字が1ならアクティブプレイヤーが入れ替わる
    }
  }
});

btnHold.addEventListener('click', () => {
  if (playing) {
    // 現在のスコアをアクティブプレイヤーに追加
    scores[activePlayer] += currentScore;

    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

    // スコアがクリア値に達したかどうか
    if (scores[activePlayer] >= 50) {
      // ゲーム終了：）
      playing = false;
      dice.classList.add('hidden');

      document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
      document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
    } else {
      switchPlayer();
    }
  }
});

restart.addEventListener('click', init);
