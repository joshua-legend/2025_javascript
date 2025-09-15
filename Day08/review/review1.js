// const nintendo = [
//   { title: "마리오 카트", genre: ["레이싱", "아케이드"], price: 59800, multiplayer: true },
//   { title: "포켓몬스터", genre: ["RPG", "어드벤처"], price: 64800, multiplayer: false },
//   { title: "동물의 숲", genre: ["RPG", "힐링"], price: 64800, multiplayer: true },
//   { title: "별의 커비", genre: ["액션", "어드벤처"], price: 49800, multiplayer: false },
//   { title: "슈퍼마리오 오디세이", genre: ["액션", "어드벤처", "아케이드"], price: 79800, multiplayer: false },
// ];

// // 1. 가격이 60000원 이하이고, 멀티플레이가 되는 게임 리스트
// nintendo.filter((x) => x.price <= 60000 && x.multiplayer);
// // 2. 장르가 어드벤처이고, 가격이 60000원 이상인 게임 리스트
// nintendo.filter((x) => x.genre.some((v) => v == "어드벤처") && x.price >= 60000);
// // 3. 멀티 플레이어가 안되고, 장르가 어드벤처인 게임 리스트
// nintendo.filter((x) => !x.multiplayer && x.genre.some((v) => v == "어드벤처"));

const test = [1, 2, 3, 4, 5];

test.map((x) => x * 2); // [2,4,6,8,10]
test.map((x) => "^^"); //["^^","^^","^^","^^","^^"]
test.map((x) => 1); // [1,1,1,1,1]
test.map((x) => true); //[true,true,true,true,true]
test.map((x) => x + 1); //[2,3,4,5,6]
test.map((x) => {
  return { name: "ㅋㅋ" };
}); //[{name:"ㅋㅋ"},{name:"ㅋㅋ"},{name:"ㅋㅋ"},{name:"ㅋㅋ"},{name:"ㅋㅋ"}]
