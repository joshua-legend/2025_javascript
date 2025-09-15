const button = document.querySelector("button");

// button.addEventListener("이벤트종류",무엇을)
button.addEventListener("click", () => {
  alert("ㅅㄱ");
});

// 추가버튼을 클릭하면
// 새롭게 div태그로 아메리카노 라고 적힌 요소가 생성됨!
const addButton = document.querySelector(".add");
addButton.addEventListener("click", () => {
  document.body.insertAdjacentHTML("beforeend", `<div>아메리카노</div>`);
});
