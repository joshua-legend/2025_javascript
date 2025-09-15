//마술상자 안에 마술상자

//x: function
const cook = (recipe) => {
  console.log("💛요리 시작💛");
  recipe();
  console.log("💛요리 끝💛");
};

const ramen = () => {
  console.log("물 끓이기");
  console.log("스프 넣기");
  console.log("면 넣기");
};

const kimchiStew = () => {
  console.log("고기 볶는다");
  console.log("김치 넣어서 같이 볶는다.");
  console.log("물 넣기");
};
cook(ramen);
cook(kimchiStew);

//1.불🔥 //2.얼음🧊 //3. 번개⚡
const activate = (skill) => {
  console.log("스킬 준비!");
  skill();
  console.log("스킬 완료!");
};

const fire = () => {
  console.log("🔥");
};
const ice = () => {
  console.log("🧊");
};
const lightening = () => {
  console.log("⚡");
};
