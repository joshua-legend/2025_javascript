const minus = document.querySelector(".minus");
const num = document.querySelector(".num");
const plus = document.querySelector(".plus");

plus.addEventListener("click", () => {
  num.style.color = +num.innerHTML < 9 ? "black" : "blue";
  num.innerHTML = +num.innerHTML + 1;
});

minus.addEventListener("click", () => {
  num.innerHTML = +num.innerHTML == 0 ? 0 : +num.innerHTML - 1;
  num.style.color = +num.innerHTML < 11 ? "black" : "blue";
});
