/**
 * create a simple factory
 */
(() => {
  function createFactory(...classes) {
    const map = {};
    classes.forEach(item => {
      map[item.name] = item;
    });

    return (type, ...props) => {
      const productClass = map[type];
      return new productClass(...props);
    };
  }

  const factory = createFactory(Person, Student, Doctor);
  const student = factory("Student", "liming", 12, "male");
  const doctor = factory("Doctor");
  const person = factory("Person");

  console.group("simple factory creator");
  student.speak();
  doctor.speak();
  person.speak();
  console.groupEnd();
})();
