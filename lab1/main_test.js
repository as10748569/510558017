const test = require('node:test');
const assert = require('assert');
const { MyClass, Student } = require('./main');

test("Test MyClass's addStudent", () => {
    // TODO
	const myClass = new MyClass();
	const student = new Student("John");
	myClass.addStudent(student);
	assert.strictEqual(myClass.students.length, 1); 
	assert.strictEqual(myClass.students[0], student); 
    //throw new Error("Test not implemented");
});

test("Test MyClass's getStudentById", () => {
    // TODO
	const myClass = new MyClass();
	const student1 = new Student("John");
	const student2 = new Student("Jane");
	const student3 = new Student("Doe");
	myClass.addStudent(student1);
	myClass.addStudent(student2);
	myClass.addStudent(student3);
	const foundStudent = myClass.getStudentById(student2.id);
	assert.strictEqual(foundStudent, student2); 
    //throw new Error("Test not implemented");
});

test("Test Student's setName", () => {
    // TODO
	const student = new Student("John");
	student.setName("Smith");
	assert.strictEqual(student.getName(), "Smith");
});

test("Test Student's getName", () => {
    // TODO
	const student = new Student("John");
	assert.strictEqual(student.getName(), "John"); 
    //throw new Error("Test not implemented");
});
