const test = require('node:test');
const assert = require('assert');
const { MyClass, Student } = require('./main');

test("Test MyClass's addStudent", async (t) => {
    const myClass = new MyClass();
    const student = new Student();
    student.setName("Test Student");
    const index = myClass.addStudent(student);
    assert.strictEqual(index, 0, "addStudent should return index 0 for the first student");
});

test("Test MyClass's getStudentById", async (t) => {
    const myClass = new MyClass();
    const student = new Student();
    student.setName("Test Student");
    const index = myClass.addStudent(student);
    const fetchedStudent = myClass.getStudentById(index);
    assert.strictEqual(fetchedStudent.getName(), "Test Student", "getStudentById should return the correct student by id");
});

test("Test Student's setName", async (t) => {
    const student = new Student();
    student.setName("Another Student");
    assert.strictEqual(student.getName(), "Another Student", "setName should successfully set the student's name");
});

test("Test Student's getName", async (t) => {
    const student = new Student();
    student.setName("Another Test Student");
    assert.strictEqual(student.getName(), "Another Test Student", "getName should return the name of the student");
});
