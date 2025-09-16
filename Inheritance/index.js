// Designer Developer Intern Manager
class Employee {
  #name;
  #age;
  #position;
  #salary;
  constructor(name, age, position, salary) {
    if (age < 0 || typeof age != "number") {
      throw new Error("age는 0보다 크거나 숫자여야합니다.");
    }
    this.#name = name;
    this.#age = age;
    this.#position = position;
    this.#salary = salary;
  }
  introduce() {
    console.log(`이름:${this.#name}, 직급:${this.#position}`);
  }
  getAnnualSalary() {
    console.log(`연봉: ${this.#salary * 12}`);
  }
}

class Designer extends Employee {
  #tool;
  constructor(name, age, position, salary, tool) {
    super(name, age, position, salary);
    this.#tool = tool;
  }
  design() {
    console.log(`${this.#tool}로 디자인을 합니다.`);
  }
}

// Develope : langauge, code()
// Accounter : account()

class Developer extends Employee {
  #langauge;
  constructor(name, age, position, salary, language) {
    super(name, age, position, salary);
    this.#langauge = language;
  }
  code() {
    console.log(`${this.#langauge}로 코드를 칩니다.`);
  }
}

class Accounter extends Employee {
  constructor(name, age, position, salary) {
    super(name, age, position, salary);
  }
  account() {
    console.log(`회계중입니다.`);
  }
}
const lee = new Designer("이다힘", 23, "사원", 250, "포토샵");
const jeon = new Developer("전수효", 24, "인턴", 180, "Typescript");
const park = new Developer("asd", 24, "asd", 180, "asd");

const kim = new Employee("김예창", "열한살");
