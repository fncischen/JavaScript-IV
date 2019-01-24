// CODE here for your Lambda Classes

class Person {
    constructor(personStats){
        this.name = personStats.name;
        this.age = personStats.age;
        this.location = personStats.location;
        this.gender = personStats.gender;
    }

    speak() {
        return "Hello, my name is $(this.name) and I am from $(this.location)";
    }
}

class Instructor extends Person {
    constructor(InstructorStats){
        super(InstructorStats);
        this.specialty = InstructorStats.specialty;
        this.favLangauge = InstructorStats.favLangauge;
        this.catchPhrase = InstructorStats.catchPhrase;
    }

    demo(subject) {
        return "Today we are learning about $(subject)";
    };

    grade(student, subject) {
        return "$(student.name) received a perfect score on $(subject)."
    };

}

class Student extends Person {
    constructor(StudentStats) {
        super(StudentStats);
        this.previousBackground = StudentStats.previousBackground;
        this.className = StudentStats.className;
        this.favSubjects = StudentStats.favSubjects;
    }

    listSubjects() {
        this.favSubjects.foreach(function(element) {
           return element; 
        }
    }

    
}