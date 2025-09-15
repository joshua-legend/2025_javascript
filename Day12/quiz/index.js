const a = document.querySelector(".a");
const b = document.querySelector(".b");
const c = document.querySelector(".c");
const reset = document.querySelector(".reset");
const total = document.querySelector(".total");

a.addEventListener("click", () => {
  total.innerHTML = "총 " + (parseInt(total.innerHTML.split(" ")[1]) + 5000) + "원";
});
b.addEventListener("click", () => {
  total.innerHTML = "총 " + (parseInt(total.innerHTML.split(" ")[1]) + 6000) + "원";
});
c.addEventListener("click", () => {
  total.innerHTML = "총 " + (parseInt(total.innerHTML.split(" ")[1]) + 6500) + "원";
});
reset.addEventListener("click", () => {
  total.innerHTML = "총 0원";
});
