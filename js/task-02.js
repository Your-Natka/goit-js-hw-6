const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const List = document.querySelector(`ul#ingredients`);
// const listAdd = [];
ingredients.forEach((ingredient) => {
  const listItem = document.createElement("li");
  listItem.textContent = "${ingredient}";
  listItem.classList.add("item");
  List.append(listItem);
  // listAdd.push(listItem);
})
// list.append(listAdd);
