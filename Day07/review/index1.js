const starbucks = [
  { name: "아메리카노", price: 4500, shots: 2, ingredients: ["water", "caffeine"] },
  { name: "라떼", price: 5500, shots: 2, ingredients: ["water", "milk", "caffeine"] },
  { name: "돌체라떼", price: 6500, shots: 3, ingredients: ["water", "milk", "caffeine", "condensed milk"] },
  { name: "바닐라 크림", price: 5500, shots: 2, ingredients: ["milk", "caffeine", "vanilla", "water"] },
  { name: "카페 모카", price: 6000, shots: 2, ingredients: ["milk", "chocolate", "water", "caffeine"] },
];
//3. 저녁 타임 이벤트로 각 가격을 20% 할인해서 메뉴 전체 나타내기
const fn3 = (x) => {
  x.price = x.price * 0.8;
  x.shots = x.shots - 1;
  return x;
};
const answer3 = starbucks.map(fn3);

//4. 이름에 라떼가 있으면, 재고없음 이름 바꾸고 아니면 그대로 나타내기
const fn4 = (x) => {
  x.name = x.name.includes("라떼") ? "재고없음" : x.name;
  return x;
};
const answer4 = starbucks.map(fn4);

//5. caffeine -> decaffeine
const fn6 = (y) => {
  return y == "caffeine" ? "decaffeine" : y;
};
const fn5 = (x) => {
  x.ingredients = x.ingredients.map(fn6);
  return x;
};

const answer5 = starbucks.map(fn5);
window.console.log(answer5);
