'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.open-modal');

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener(
    'click'(() => {
      modal.classList.remove('hidden');
      overlay.classList.remove('hidden');
      modal.style.display = 'block';
    })
  );

  const closeModal = () => {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
  };

  btnCloseModal.addEventListener(
    'click'(() => {
      modal.classList.add('hidden');
    })
  );
}

addEventListener;
