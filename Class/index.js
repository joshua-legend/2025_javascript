// class Car {
//   constructor(name, color) {
//     this.name = name;
//     this.color = color;
//     this.speed = 0;
//     this.engine = "v1";
//   }
//   speedUp() {
//     this.speed = this.speed + 1;
//   }
//   speedDown() {
//     if (this.speed > 0) {
//       this.speed = this.speed - 1;
//     }
//   }
//   changeName(newName) {
//     this.name = newName;
//   }
// }
// 상태[명사]/변수:엔진="v1",속도=0,이름="mz카트",차색상="흰색"
// 동작[동사]/함수:속도올리기,속도낮추기,이름바꾸기

// 상태: 이름, 나이, 전번, 주문정보, 예약방,
// 동작: 정보 변경하기, 방취소하기, 방변경하기
class Guest {
  constructor(name, age, phone) {
    this.name = name;
    this.age = age;
    this.phone = phone;
  }
  changeInfo(name, age, phone) {
    this.name = name;
    this.age = age;
    this.phone = phone;
  }
}

// 방탈출 룸:
// 변수: 이름, 난이도, 상세내용, 예약
// 함수: 예약하기
class Room {
  constructor(name, difficulty, desc) {
    this.name = name;
    this.difficulty = difficulty;
    this.desc = desc;
    this.reservations = [
      { time: "09:00", isRerserved: false },
      { time: "10:00", isRerserved: false },
      { time: "11:00", isRerserved: false },
      { time: "12:00", isRerserved: false },
    ];
  }
  //time을 true로 바꾸기
  reservate(time) {
    this.reservations.map((v) => {
      if (v.time == time) v.isRerserved = true;
      return v;
    });
  }
  //time을 전체 콘솔로 보여주기
  show() {
    console.log(this.name);
    console.log(this.reservations);
  }
}

const maze = new Room("알고리즘미로", 2, "코딩테스트하다가 길 잃음");
const git = new Room("깃 타임머신", 3, "깃 저장하다 데이터날림");
const exit = new Room("익스트 윗 리액트", 4, "리액트 다까먹음");

maze.reservate("11:00");
maze.show();

git.reservate("09:00");
git.show();
