class Base {
  static hello() {
    console.log("안녕하세용");
  }
}
Base.hello();

class MathHelper {
  static square(x) {
    return x * x;
  }
  static cube(x) {
    return x * x * x;
  }
}

MathHelper.square(3);
MathHelper.cube(3);
