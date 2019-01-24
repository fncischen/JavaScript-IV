// CODE here for your Lambda Classes

class Person {
    constructor(personStats){
        this.name = personStats.name;
        this.age = personStats.age;
        this.location = personStats.location;
        this.gender = personStats.gender;
    }

    speak() {
        return `Hello, my name is ${this.name} and I am from ${this.location}.`;
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
        return `Today we are learning about ${subject}`;
    };

    grade(student, subject) {
        return `${student.name} received a perfect score on ${subject}.`;
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
        for(let i = 0; i < this.favSubjects.length; i++) {
            console.log(this.favSubjects[i]);
        };
    };

    PRAssignment(subject) {
        return `${this.name} submitted a PR for ${subject}.` ;
    };

    sprintChallenge(subject) {
        return `${this.name} has begune sprint challenge on ${subject}.`;
    };
}

class ProjectManager extends Instructor {
    constructor(PMStats) {
        super(PMStats);
        this.gradClassName = PMStats.gradClassName;
        this.favInstructor = PMStats.favInstructor;
    }

    standUp(channel) {
        return `${this.name} announces to ${channel}: ${channel} study time!`;
    }

    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}.`;
    }
}

// Example Classes:

const Jan = new Instructor({
    name: "Jan",
    age: 35,
    location: "Denver",
    gender: "Male",

    specialty: "Python",
    favLangauge: "Javascript",
    catchPhrase: "Life's a stage."
})

const Suzy = new Student({
    name: "Suzy",
    age: 30,
    location: "Salt Lake City",
    gender: "Female",

    previousBackground: "Chemical Engineer",
    className: "WEB17",
    favSubjects: ["Chemistry", "Math"]
})

const Joe = new ProjectManager({
    name: "Joe",
    age: 37,
    location: "Portland",
    gender: "male",

    gradClassName: "WEB15",
    favInstructor: "Jan"
})

// 

console.log(Joe.age); //? 
console.log(Suzy.previousBackground); //?
console.log(Jan.catchPhrase); //?

console.log(Jan.demo("DS10")); //?
console.log(Jan.grade(Suzy,"DS10")); //?

console.log(Joe.standUp("WEB17Channel")) //?
console.log(Joe.debugsCode(Suzy, "DS10")) //?

console.log(Suzy.speak()); //?
console.log(Suzy.PRAssignment("DS10")); //?
console.log(Suzy.sprintChallenge("DS10")); //?
console.log(Suzy.listSubjects()); //? 