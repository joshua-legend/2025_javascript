const minus1 = document.querySelector(".minus1");
const num1 = document.querySelector(".num1");
const plus1 = document.querySelector(".plus1");
const price1 = document.querySelector(".price1");

const minus2 = document.querySelector(".minus2");
const num2 = document.querySelector(".num2");
const plus2 = document.querySelector(".plus2");
const price2 = document.querySelector(".price2");

const total_amount = document.querySelector(".total_amount");
const total_price = document.querySelector(".total_price");

const total = () => {
  total_amount.innerHTML = "";
  total_amount.innerHTML = parseInt(num1.innerHTML) + parseInt(num2.innerHTML) + "개";
  total_price.innerHTML = "";
  total_price.innerHTML = parseInt(price1.innerHTML) + parseInt(price2.innerHTML) + "원";
};

plus1.addEventListener("click", () => {
  num1.innerHTML = +num1.innerHTML + 1;
  price1.innerHTML = Number(parseInt(price1.innerHTML) + 15900) + "원";
  total();
});

minus1.addEventListener("click", () => {
  if (+num1.innerHTML > 1) {
    num1.innerHTML = +num1.innerHTML - 1;
    price1.innerHTML = Number(parseInt(price1.innerHTML) - 15900) + "원";
    total();
  } else {
    num1.innerHTML = 1;
  }
});

plus2.addEventListener("click", () => {
  num2.innerHTML = +num2.innerHTML + 1;
  price2.innerHTML = Number(parseInt(price2.innerHTML) + 15900) + "원";
  total();
});

minus2.addEventListener("click", () => {
  if (+num2.innerHTML > 1) {
    num2.innerHTML = +num2.innerHTML - 1;
    price2.innerHTML = Number(parseInt(price2.innerHTML) - 15900) + "원";
    total();
  } else {
    num2.innerHTML = 1;
  }
});
