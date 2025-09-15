const span = document.querySelector("span");

const input = document.querySelector("input");
input.addEventListener("input", (x) => {
  const length = x.target.value.length;
  span.innerHTML = length + "/10";
  span.style.color = length > 10 ? "red" : "black";
});

const button = document.querySelector("button");
button.addEventListener("click", (x) => {
  x.target.innerHTML = x.target.innerHTML == "😎" ? "😛" : "😎";
  input.type = input.type == "text" ? "password" : "text";
});
