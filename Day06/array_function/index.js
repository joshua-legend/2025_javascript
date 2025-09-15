// quiz
// arr 배열을 줬을 때, 배열안에 있는 요소들을 두배로해서 돌려주는 함수 만들기
// [1,2,3,4,5] ->[2,4,6,8,10]

//map: 리스트 안에 있는 요소 바꾸기
const threeTime = (x) => {
  return x * 3;
};
const test = [1, 2, 3, 4, 5].map(threeTime);
console.log(test);
