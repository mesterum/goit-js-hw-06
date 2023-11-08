const validationInput = document.querySelector("input#validation-input");
validationInput.addEventListener("blur", ({target}) => {
  /* const classList = target.classList;
  classList.remove("valid", "invalid");
  classList.add(
    target.value.length == target.dataset.length ? "valid" : "invalid"
  ); */
  target.className =
    target.value.length == target.dataset.length ? "valid" : "invalid";
});
