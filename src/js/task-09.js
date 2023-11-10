function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const outputSpan = document.querySelector("span.color"),
  bodyStyle = document.body.style;
document
  .querySelector("button.change-color")
  .addEventListener("click", event => {
    const aRandomHexColor = getRandomHexColor();
    outputSpan.textContent = aRandomHexColor;
    bodyStyle.backgroundColor = aRandomHexColor;
  });
