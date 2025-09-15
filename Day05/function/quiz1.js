// 1. 어떠한 x를 넣으면 제곱을 돌려주는 함수 만든 후
function square(x) {
  return x ** 2;
}

// 2. 어떠한 food를 넣으면 'food는 맛있다' 함수 만든 후
function delicious(food) {
  return `${food}는 맛있다`;
}

// 3. 어떠한 x를 넣으면 홀수 또는 짝수를 돌려주는 함수를 만든 후
function isOddorEven(x) {
  return x % 2 ? "홀수" : "짝수";
}

// 4. 어떠한 x를 넣으면 배열로 [x*1,x*2,x*3]을 돌려주는 함수를 만든후
function threeList(x) {
  return [x * 1, x * 2, x * 3];
}

const a = square(20);
window.console.log(`첫 번째 결과:${a}`);

const b = delicious("돈까스");
window.console.log(`두 번째 결과:${b}`);

const c = isOddorEven(13);
window.console.log(`세 번째 결과:${c}`);

const d = threeList(20);
window.console.log(`네 번째 결과:${d}`);
