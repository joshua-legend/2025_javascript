// 필드: name(이름), age(나이), position(직급), salary(급여)
// 메소드: introduce, getAnnualSalary
class Employee {
  #name;
  #age;
  #position;
  #salary;
  constructor(name, age, position, salary) {
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

const lee = new Employee("이타입", 20, "사원", 190);
const park = new Employee("박파썬", 22, "사원", 200);

lee.introduce();
lee.getAnnualSalary();
park.introduce();
park.getAnnualSalary();
