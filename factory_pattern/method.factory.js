/**
 * The Factory Method Pattern defines an interface
 * for creating an object, but lets subclasses decide which
 * class to instantiate. Factory Method lets a class defer
 * instantiation to subclasses.
 */
(() => {
  function humanStore(specificHumanClass, initData) {
    return specificHumanClass.create(initData);
  }

  const student = humanStore(Student, { name: "liming", age: 12, sex: "male" });
  const doctor = humanStore(Doctor);
  const person = humanStore(Person);

  student.speak();
  doctor.speak();
  person.speak();
})();
