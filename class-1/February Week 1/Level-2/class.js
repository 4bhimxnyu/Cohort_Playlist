// this is a demonstration of class from oop logic

class Students{
    constructor(Name,section,rollNo,EnrollmentId){
        this.Name = Name;
        this.section = section;
        this.rollNo = rollNo;
        this.EnrollmentId= EnrollmentId;
    }
    display(){
        console.log(`the name of the student is ${Name} and the roll no is ${rollNo} and the enrollment id is ${EnrollmentId}`);
        
    }
}

let Student1 = new Students("Abhimanyu","B","02","5632AP");

let Student2 = new Students("Aishwarya","C","05","1242AP");

Student1.display();
Student2.display();