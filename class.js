class Student {
    constructor(stId, stName){
        this.id = stId;
        this.name = stName;
        this.school = "Argentina School"


    }

}

const student1 = new Student(1212, "Aguero");
const student2 = new Student(1234, "di maria");
const student3 = new Student(99, "tania" )
console.log(student1.name, student2.name, student3.name);