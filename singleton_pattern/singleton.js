/**
 * singleton design pattern implement by function
 *
 * disadvantage is can the instance is editable, can be error easily
 *
 * eg. Singleton1.instance = null;
 */

function Singleton1() {
  if (
    Object.prototype.toString.call(Singleton1.instance) === "[object Object]"
  ) {
    return Singleton1.instance;
  }

  this.name = "1";
  Singleton1.instance = this;
}

const SingletonObj1 = new Singleton1();
const SingletonObj2 = new Singleton1();

console.info(SingletonObj1 === SingletonObj2);

// singleton design pattern implement by class
class SingletonClass1 {
  constructor() {
    if (
      Object.prototype.toString.call(SingletonClass1.instance) ===
      "[object Object]"
    ) {
      return SingletonClass1.instance;
    }

    this.name = "1";
    SingletonClass1.instance = this;
  }
}

const SingletonClassObj1 = new SingletonClass1();
const SingletonClassObj2 = new SingletonClass1();

console.info(SingletonClassObj1 === SingletonClassObj2);
console.info(SingletonClassObj1 === SingletonClass1.instance);

// use closure
const SingletonClass2 = (() => {
  let instance = null;

  return class {
    constructor(...props) {
      if (Object.prototype.toString.call(instance) === "[object Object]") {
        return instance;
      }

      this.name = "1";
      instance = this;
    }
  };
})();

const SingletonClass2Obj1 = new SingletonClass2();
const SingletonClass2Obj2 = new SingletonClass2();

console.info(SingletonClass2Obj1 === SingletonClass2Obj2);
console.info((SingletonClass2Obj2.name = 2));
console.info(SingletonClass2Obj1.name);
