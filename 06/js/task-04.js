let counterValue = 0;
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const outputSpan = document.querySelector("span#value");
decrementBtn.addEventListener("click", ev => {
  outputSpan.textContent = --counterValue;
});
incrementBtn.addEventListener("click", ev => {
  outputSpan.textContent = ++counterValue;
});
