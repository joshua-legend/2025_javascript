// 유저에게 프롬프트로 영어 문장을 입력 받고
// 띄어쓰기 별로 영어의 문장의 길이를 배열로 나타내기
// ex) "today is tuesday" -> [5,2,7]
const sentence = window.prompt("영어 문장 입력");
const arr = sentence.split(" ");
const fn1 = (x) => {
  return x.length;
};
const quiz1 = arr.map(fn1);
window.console.log(quiz1);
