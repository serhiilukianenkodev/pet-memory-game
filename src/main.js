import { createRandomSet } from './js/createRandomSet';
import { refs } from './js/refs';
import { renderCards } from './js/renderCards';

// console.log(createRandomSet(16));
let firstOpenedCard = null;

refs.cards.addEventListener('click', onCardsClick);
renderCards();

function onCardsClick(evt) {
  if (evt.target === evt.currentTarget) return;
  if (evt.target === firstOpenedCard) return;
  if (evt.target.classList.contains('found')) return;

  const target = evt.target;
  showCard(target);

  if (!firstOpenedCard) {
    firstOpenedCard = target;
    target.classList.add('shown');
    return;
  }

  if (target.dataset.id === firstOpenedCard.dataset.id) {
    makeCardFound(target);
    makeCardFound(firstOpenedCard);
    firstOpenedCard = null;

    console.log('bingo');
    return;
  }

  closeCard(target);
  closeCard(firstOpenedCard);
  firstOpenedCard = null;

  //   console.log(target.dataset.id);
}

function closeCard(target) {
  //   target.classList.remove('shown');
  setInterval(() => target.classList.remove('shown'), 500);
}

function showCard(target) {
  target.classList.add('shown');
}

function makeCardFound(target) {
  target.classList.add('found');
}
