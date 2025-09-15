// 1. Document[HTML] queryselect(찾기), createElement(만들기)
// 2. Element[TAG] innerHTML(글씨넣기),style(css), appendChild(자식 태그로 넣기)

// div - 글씨[pink], 배경색[green], 폰트크기[30px]
const div = document.createElement("div");
div.innerHTML = "지금 두번째 시간임 ㅅㄱ";
div.style.color = "pink";
document.body.appendChild(div);

// button - 글씨[blue], 배경색[yellow], 폰트크기[20px], padding[10px]
const button = document.createElement("button");
button.innerHTML = "해피!";
button.style.color = "blue";
document.body.appendChild(button);
