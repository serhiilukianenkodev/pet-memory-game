import { Timer, TimerOptions, Time } from 'timer-node';

import { checkWin } from './js/checkWin';
import { refs } from './js/refs';
import { renderCards } from './js/renderCards';

let firstOpenedCard = null;
let secondOpenedCard = null;
const CARDS_AMOUNT = 16;
const timer = new Timer();
let timerSetIntervatID = null;
let stepsAmount = 0;

refs.cards.addEventListener('click', onCardsClick);
refs.startBtn.addEventListener('click', onStartBtnClick);

function onStartBtnClick() {
  renderCards(CARDS_AMOUNT);
  if (timerSetIntervatID) {
    clearInterval(timerSetIntervatID);
    timer.stop();
    stepsAmount = 0;
    refs.stepsField.textContent = stepsAmount;
  }
  timer.start();
  timerSetIntervatID = setInterval(() => {
    const min = String(timer.time().m).padStart(2, '0');
    const sec = String(timer.time().s).padStart(2, '0');
    refs.gameTimeField.textContent = `${min}:${sec}`;
  }, 1000);
}

function onCardsClick({ target, currentTarget }) {
  if (target === currentTarget) return;
  if (firstOpenedCard && secondOpenedCard) return;
  if (target === firstOpenedCard) return;
  if (target.classList.contains('found')) return;

  stepsAmount += 1;
  refs.stepsField.textContent = stepsAmount;
  showCard(target);

  if (!firstOpenedCard) {
    firstOpenedCard = target;
    return;
  }
  secondOpenedCard = target;

  if (secondOpenedCard.dataset.id === firstOpenedCard.dataset.id) {
    makeCardFound(secondOpenedCard);
    makeCardFound(firstOpenedCard);
    firstOpenedCard = null;
    secondOpenedCard = null;

    if (checkWin(refs.cards)) {
      refs.cards.innerHTML = `<div>
        <h1>You WIN</h1>
        <p>Time: ${refs.gameTimeField.textContent}</p>
        <p>Steps: ${stepsAmount}</p>
        </div`;
      clearInterval(timerSetIntervatID);
      timer.stop();
      refs.gameTimeField.textContent = '00:00';
      stepsAmount = 0;
      refs.stepsField.textContent = stepsAmount;

      // setTimeout(() => {
      //   refs.cards.innerHTML = `<div>
      //   <h1>You WIN</h1>
      //   <p>Time: ${refs.gameTimeField.textContent}</p>
      //   <p>Steps: ${stepsAmount}</p>
      //   </div`;
      //   clearInterval(timerSetIntervatID);
      //   timer.stop();
      //   refs.gameTimeField.textContent = '00:00';
      //   stepsAmount = 0;
      //   refs.stepsField.textContent = stepsAmount;
      // }, 500);
    }
    return;
  }

  closeCards();
}

function closeCards() {
  setTimeout(() => {
    firstOpenedCard.classList.remove('shown');
    secondOpenedCard.classList.remove('shown');
    firstOpenedCard = null;
    secondOpenedCard = null;
  }, 500);
}

function showCard(target) {
  target.classList.add('shown');
}

function makeCardFound(target) {
  target.classList.add('found');
}
