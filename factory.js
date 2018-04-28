/**
 * create a factory method defined by props and newClass
 *
 * @param {Array} props properties value of the object
 */
function getFactory(props = []) {
  return function(proto, ...args) {
    let obj = new Object();

    props.forEach((item, idx) => {
      obj[item] = args[idx];
    });

    obj.__proto__ = proto;
    return obj;
  };
}

//** example **

/**
 * base class
 */
class Person {
  constructor(name, age, sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;
  }

  showInfo() {
    console.log(
      `Hi, I'm a ${this.age} years old ${this.sex}, and my name is ${
        this.name
      }.`
    );
  }
}

class Dog {
  constructor(name, age, sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;
  }

  bark() {
    console.log(`wang wang`);
  }
}

const Factory = getFactory(["name", "age", "sex"]); // create factory

let p1 = Factory(Person, "liming", 29, "male"); // create object based on the Person
let p2 = Factory(Dog, "diudiu", 4, "female"); // create object based on the Person
console.info(p1);

p1.showInfo();
p2.bark();
