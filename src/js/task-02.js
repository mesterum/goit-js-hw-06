const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

document.querySelector("ul#ingredients").append(
  ...ingredients.map(text => {
    const el = document.createElement("li");
    el.textContent = text;
    el.classList.add("item");
    return el;
  })
);
