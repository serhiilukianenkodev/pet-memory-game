import { createRandomSet } from './createRandomSet';
import { refs } from './refs';

export function renderCards() {
  const cardSet = createRandomSet(12);
  const markup = cardSet
    .map(item => `<div class="card" data-id=${item}>${item}</div>`)
    .join('');
  refs.cards.innerHTML = markup;
}
