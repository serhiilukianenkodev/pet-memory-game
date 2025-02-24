import { createRandomSet } from './createRandomSet';
import { refs } from './refs';
// import svgImages from './data/svg_images.json';
const emoji = [
  '\u{1F41F}',
  '\u{1F996}',
  '\u{1F980}',
  '\u{1F427}',
  '\u{1F425}',
  '\u{1F525}',
  '\u{1F41E}',
  '\u{1F989}',
  '\u{1F416}',
  '\u{1F422}',
  '\u{1F991}',
  '\u{1F99C}',
  '\u{1F99A}',
  '\u{1F989}',
  '\u{1FAB0}',
  '\u{1F42C}',
  '\u{1FAB1}',
  '\u{1FAB2}',
  '\u{1FAB3}',
  '\u{1FAB4}',
  '\u{1FAB5}',
  '\u{1FAB6}',
  '\u{1FAB7}',
  '\u{1FAB8}',
  '\u{1FAB9}',
  '\u{1FABA}',
  '\u{1FABB}',
  '\u{1FABC}',
  '\u{1FABD}',
  '\u{1FABE}',
  '\u{1FABF}',
  '\u{1FAC0}',
];
// console.log(svgImages);
// ${svgImages[item].svg}

export function renderCards(amount = 12) {
  const cardSet = createRandomSet(amount);
  const markup = cardSet
    .map(
      item => `<div class="card" data-id=${item}>
      ${emoji[item]}
  </div>`
    )
    .join('');
  refs.cards.innerHTML = markup;
}
