// use closure
const SingletonCreator = class1 => {
  return function() {
    var instance = new class1();

    class1 = function() {
      return instance;
    };

    // carry over the prototype
    class1.prototype = this;

    return instance;
  };
};

class Test1 {
  constructor() {
    console.info("lala");
  }

  showInTest1() {
    console.info("in test1");
  }
}

let s = SingletonCreator(Test1);
let r1 = new s();
let r2 = new s();

console.info(r1 === r2);

r1.showInTest1();
