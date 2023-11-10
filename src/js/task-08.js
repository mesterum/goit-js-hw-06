document.querySelector("form.login-form").addEventListener("submit", event => {
  event.preventDefault();
  const fieldset = {},
    formEl = event.target;
  for (const el of formEl.elements) {
    if (el.type == "submit") continue;
    if (el.value == "") {
      alert("Toate câmpurile trebuie completate");
      return;
    }
    fieldset[el.name] = el.value;
  }
  console.table(fieldset);
  formEl.reset();
});
