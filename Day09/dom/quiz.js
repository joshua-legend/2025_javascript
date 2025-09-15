//프롬프트로 유저에게 만들고 싶은 태그 묻고
//태그의 배경색 묻고
//태그의 컨텐츠(안의 내용) 묻고 난 후에
//HTML에 유저가 요구한 태그 만들기!
// const user_tag = prompt("만들고 싶은 태그");
// const user_bg = prompt("만들고 싶은 배경색");
// const user_contents = prompt("만들고 싶은 내용");

// const tag = document.createElement(user_tag);
// tag.style.backgroundColor = user_bg;
// tag.innerHTML = user_contents;

// document.body.appendChild(tag);

// 유저에게 좋아하는 음식들 입력 받고
// 음식들을 각각 버튼 태그로 만들고
// 버튼 태그 색상은 순서대로 빨주노초파남보...
//ex) "apple kiwi banana mango grape watermelon melon orange"

const color = ["red", "orange", "yellow", "green", "blue", "indigo", "purple"];
const foods = prompt("좋아하는 음식들").split(" ");
// [apple kiwi banana mango]

foods.forEach((x, i) => {
  const btn = document.createElement("button");
  btn.innerHTML = x;
  btn.style.color = color[i % 7];
  document.body.appendChild(btn);
});
