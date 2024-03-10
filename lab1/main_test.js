const test = require('node:test');
const assert = require('assert');
const { MyClass, Student } = require('./main');

test("Test MyClass's addStudent", () => {
    const myClass = new MyClass();
    const student = new Student();
    
    // Test adding a student
    myClass.addStudent(student);
    assert.strictEqual(myClass.students.length, 1);
    assert.strictEqual(myClass.students[0], student);
    
    // Test adding multiple students
    const student2 = new Student();
    const student3 = new Student();
    myClass.addStudent(student2);
    myClass.addStudent(student3);
    assert.strictEqual(myClass.students.length, 3);
});

test("Test MyClass's getStudentById", () => {
    const myClass = new MyClass();
    const student1 = new Student();
    const student2 = new Student();
    const student3 = new Student();
    myClass.addStudent(student1);
    myClass.addStudent(student2);
    myClass.addStudent(student3);
    
    // Test getting a student by ID
    const foundStudent = myClass.getStudentById(1);
    assert.strictEqual(foundStudent, student2);
    
    // Test getting a non-existing student by ID
    const nonExistingStudent = myClass.getStudentById(5);
    assert.strictEqual(nonExistingStudent, null);
});

test("Test Student's setName", () => {
    const student = new Student();
    
    // Test setting a valid name
    student.setName("John");
    assert.strictEqual(student.getName(), "John");
    
    // Test setting an invalid name
    student.setName(123); // Passing a number instead of a string
    assert.strictEqual(student.getName(), ""); // Name should remain unchanged
});

test("Test Student's getName", () => {
    const student = new Student();
    
    // Test getting name when name is set
    student.setName("John");
    assert.strictEqual(student.getName(), "John");
    
    // Test getting name when name is not set
    assert.strictEqual(student.getName(), ""); // Should return an empty string
});

