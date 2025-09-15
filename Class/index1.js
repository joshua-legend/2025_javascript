class Car {
  #name;
  #speed;
  constructor(name) {
    this.#name = name;
    this.#speed = 0;
  }
  changeName(name) {
    this.#name = name;
  }
  showSpeed() {
    console.log(`현재 속도:${this.#speed}`);
  }
  speedUp() {
    this.#speed = this.#speed + 1;
  }
  speedDown() {
    if (this.#speed > 0) {
      this.#speed = this.#speed - 1;
    }
  }
}

const tesla = new Car("X모델");
