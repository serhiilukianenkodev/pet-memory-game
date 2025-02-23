export function checkWin(cardField) {
  const res = [...cardField.children].every(el =>
    el.classList.contains('found')
  );
  return res;
}
