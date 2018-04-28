/**
 * A simple factory is an object which encapsulates
 * the creation of another object, shielding that
 * code from the rest of your application.
 */
(() => {
  function simpleFactory(type) {
    switch (type) {
      case "Doctor":
        return new Doctor();
      case "Student":
        return new Student();
      default:
        return new Person();
    }
  }

  const student = simpleFactory("Student");
  const doctor = simpleFactory("Doctor");

  student.study();
  doctor.surgery();
})();
