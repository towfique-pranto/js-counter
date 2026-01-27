const decreaseBtn = document.querySelector('.js-decreaseBtn');
const increaseBtn = document.querySelector('.js-increaseBtn');
const resetBtn = document.querySelector('.js-resetBtn');
const countLabel = document.querySelector('.js-countLabel');

let count = 0;

increaseBtn.addEventListener('click', () => {
  count++;
  countLabel.innerText = count;
});
decreaseBtn.addEventListener('click', () => {
  count--;
  countLabel.innerText = count;
});
resetBtn.addEventListener('click', () => {
  count = 0;
  countLabel.innerText = count;
}); 