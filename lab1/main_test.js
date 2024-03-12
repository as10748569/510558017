const test = require('node:test');
const assert = require('assert');
const { MyClass, Student } = require('./main');

test("Test MyClass's addStudent method", async (t) => {
    const myClass = new MyClass();
    const student = new Student();
    student.setName("John");
    const index = myClass.addStudent(student);
    assert.strictEqual(index, 0); 
});

test("Test MyClass's getStudentById method", async (t) => {
    const myClass = new MyClass();
    const student = new Student();
    student.setName("Jane");
    const index = myClass.addStudent(student);
    const fetchedStudent = myClass.getStudentById(index);
    assert.strictEqual(fetchedStudent.getName(), "Jane"); 
});

test("Test Student's setName and getName methods", async (t) => {
    const student = new Student();
    student.setName("Doe");
    assert.strictEqual(student.getName(), "Doe"); 
});

test("Test handling non-Student instance in addStudent", async (t) => {
    const myClass = new MyClass();
    const notAStudent = {}; 
    const index = myClass.addStudent(notAStudent);
    assert.strictEqual(index, -1); 
});

test("Test getStudentById with invalid id", async (t) => {
    const myClass = new MyClass();
    const student = new Student();
    student.setName("Smith");
    myClass.addStudent(student);
    const invalidId = -1; 
    const fetchedStudent = myClass.getStudentById(invalidId);
    assert.strictEqual(fetchedStudent, null);
});
