const outputSpan = document.querySelector("span#name-output");
document.querySelector("input#name-input").addEventListener("input", event => {
  outputSpan.textContent = event.target.value || "Anonymous";
});
