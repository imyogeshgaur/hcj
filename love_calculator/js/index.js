const love = document.getElementById("love");
const button = document.getElementById("btn");
const yname = document.getElementById("yname");
const lname = document.getElementById("lname");

yname.addEventListener("focus", () => {
  yname.classList.add("is-valid");
});
lname.addEventListener("focus", () => {
  lname.classList.add("is-valid");
});

button.addEventListener("click", () => {
  const number = Math.random(100) * 100;
  const absNumber = Math.ceil(number);
  love.value = absNumber + "% ";
  love.disabled = false;
});
