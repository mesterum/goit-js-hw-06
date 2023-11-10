function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 0xffffff)
    .toString(16)
    .padStart(6, 0)}`;
}

const boxes = document.querySelector("div#boxes");
const amountInput = document.querySelector("#controls > input");
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");

const createBoxes = amount => {
  let size = 30;
  const elements = Array.from({length: amount}, () => {
    const element = document.createElement("div"),
      {style} = element;
    style.width = size + "px";
    style.height = size + "px";
    style.backgroundColor = getRandomHexColor();
    size += 10;
    return element;
  });
  boxes.append(...elements);
};
const destroyBoxes = () => {
  boxes.innerHTML = "";
};

createBtn.addEventListener("click", event => {
  createBoxes(amountInput.value);
});
destroyBtn.addEventListener("click", destroyBoxes);
