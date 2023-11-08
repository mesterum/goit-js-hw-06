const textSpan = document.querySelector("span#text");
document
  .querySelector("input#font-size-control")
  .addEventListener("input", ({target}) => {
    textSpan.style.fontSize = target.value + "px";
  });
