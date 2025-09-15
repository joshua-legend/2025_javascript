//1. [3,6,9,12,15] 배열을 각각 요소를 두배하고 더하기 10해서
const fn1 = (x) => {
  return x * 2 + 10;
};
const quiz1 = [3, 6, 9, 12, 15].map(fn1);

//2. [1,2,3,4,5,6,7,8,9,10] 배열을 각각 요소에서
//홀수면 두배, 짝수면 세배 해서 결과를 콘솔로 나타내기

const fn2 = (x) => {
  return x % 2 ? x * 2 : x * 3;
};
const quiz2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(fn2);

//3. [1,2,3,4,5,6,7,8,9,10] 배열을 각각 요소에서
//5보다 작으면 1로 크면 2로해서 결과를 콘솔로 나타내기
const fn3 = (x) => {
  return x < 5 ? 1 : 2;
};
const quiz3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(fn3);

//4. [1,2,3,4,5,6,7,8,9,10] 배열을 각각 요소에서
//3의 배수면 "💛"로 아니면 "😋"로해서 결과를 콘솔로 나타내기
const fn4 = (x) => {
  return x % 3 == 0 ? "💛" : "😋";
};
const quiz4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(fn4);

//5. ["apple", "mango","juice","kiwi","strawberry"]
// 요소를 문자의 길이로 바꿔서 콘솔로 나타내기
// [5,5,5,4,10]
const fn5 = (x) => {
  return x.length;
};
const quiz5 = ["apple", "mango", "juice", "kiwi", "strawberry"].map(fn5);

window.console.log(quiz1);
window.console.log(quiz2);
window.console.log(quiz3);
window.console.log(quiz4);
window.console.log(quiz5);
