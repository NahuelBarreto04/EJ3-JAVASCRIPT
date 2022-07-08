const h2Title = document.getElementById("hero__h2");
const h4Title = document.getElementById("hero__h4");
// const heroContent = document.querySelector(".hero__form-container");
const formPizza = document.forms.form_pizza;
const inputNumber = formPizza.elements.number_input;
const pizzaCont = document.getElementById("pizza");
const menuPizza = document.getElementById("menuPizza");

formPizza.addEventListener("submit", (e) => {
  e.preventDefault();
  let idUser = Number(inputNumber.value);
  const pizza = pizzas.filter((item) => item.id === idUser)[0];
  if (inputNumber.value === "") {
    return alert("Por favor ingresa un número");
  }
  if (!pizza) {
    pizzaCont.innerHTML = "";
    formPizza.reset();
    return alert("El número de pizza que ingresó no está en el menu");
  }
  createPizza(pizza);
});
pizzas.forEach((pizza) => {
  const li = document.createElement("li");
  li.innerHTML = `${pizza.id}: ${capitalize(pizza.nombre)} `;
  li.classList.add("menu-pizza__item");
  menuPizza.appendChild(li);
});
