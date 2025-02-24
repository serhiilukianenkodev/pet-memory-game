import { checkWin } from './js/checkWin';
// import { createRandomSet } from './js/createRandomSet';
import { refs } from './js/refs';
import { renderCards } from './js/renderCards';

let firstOpenedCard = null;
let secondOpenedCard = null;
const CARDS_AMOUNT = 16;

refs.cards.addEventListener('click', onCardsClick);
renderCards(CARDS_AMOUNT);

function onCardsClick({ target, currentTarget }) {
  if (target === currentTarget) return;
  if (firstOpenedCard && secondOpenedCard) return;
  if (target === firstOpenedCard) return;
  if (target.classList.contains('found')) return;

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
      setTimeout(() => {
        alert('You WIN');
        renderCards(CARDS_AMOUNT);
      }, 500);
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
