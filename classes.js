class Person {
  constructor(name, sex, age) {
    this.name = name;
    this.sex = sex;
    this.age = age;
  }

  static create({ name, sex, age } = { name: "no name", sex: "male", age: 0 }) {
    return new Person(name, sex, age);
  }

  speak() {
    console.log(`hi, I'm ${this.name}. I can speak`);
  }
}

class Doctor extends Person {
  constructor(name, sex, age, title) {
    super(name, sex, age);
    this.title = title;
  }

  surgery() {
    console.info("in surgery");
  }

  static create({ name, sex, age } = { name: "no name", sex: "male", age: 0 }) {
    return new Doctor(name, sex, age);
  }

  speak() {
    console.log(`hi, I'm ${this.name}. I'm a doctor. I can do Surgery`);
  }
}

class Student extends Person {
  constructor(name, sex, age, grade) {
    super(name, sex, age);
    this.grade = grade;
  }

  study() {
    console.info("learning math");
  }

  static create({ name, sex, age } = { name: "no name", sex: "male", age: 0 }) {
    return new Student(name, sex, age);
  }

  speak() {
    console.log(`hi, I'm ${this.name}. I'm a student. I can do study`);
  }
}
