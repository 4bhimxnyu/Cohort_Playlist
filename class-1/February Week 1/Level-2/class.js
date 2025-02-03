// This is a demonstration of a class from OOP logic

class Students {
    constructor(firstName, section, rollNo, enrollmentId) {
        this.firstName = firstName;  // Fixed typo (was firsName)
        this.section = section;
        this.rollNo = rollNo;
        this.enrollmentId = enrollmentId;
    }

    display() {
        console.log(`The name of the student is ${this.firstName}, the roll number is ${this.rollNo}, and the enrollment ID is ${this.enrollmentId}.`);
    }
}

// Creating instances
let Student1 = new Students("Abhimanyu", "B", "02", "5632AP");
let Student2 = new Students("Aishwarya", "C", "05", "1242AP");

// Displaying information
Student1.display();
Student2.display();
