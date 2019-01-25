// CODE here for your Lambda Classes

class Person {
  constructor(props) {
    this.name = props.name;
    this.age = props.age;
    this.location = props.location;
    this.gender = props.gender;
  }

  speak() {
    return `Hello my name is ${this.name}, I'm from ${this.location}`;
  }
}

class Instructor extends Person {
  constructor(props) {
    super(props);
    this.specialty = props.specialty;
    this.favLanguage = props.favLanguage;
    this.catchPhrase = props.catchPhrase;
  }

  demo(subject) {
    return `Today we're learning ${subject}`;
  }

  grade(student, subject) {
    return `${student.name} gets a perfect score on ${subject}`;
  }
}

class ProjectManager extends Instructor {
  constructor(props) {
    super(props);
    this.gradClassName = props.gradClassName;
    this.favInstructor = props.favInstructor;
  }

  standUp(slackChannel) {
    return `${this.name} announces to #${slackChannel}, @channel standy time!`;
  }

  debugsCode(student, subject) {
    return `${this.name} debugs ${student.name}'s code on ${subject}`;
  }
}

class Student extends Person {
  constructor(props) {
    super(props);
    this.prevBackground = props.prevBackground;
    this.className = props.className;
    this.favSubjects = props.favSubjects;
  }

  listsSubjects() {
   return this.favSubjects.join(', ');
  }

  PRAssignments(subject) {
    return `${this.name} has submitted a PR for ${subject}`;
  }

  sprintChallenge(subject) {
    return `${this.name} has begun a sprint challenge on ${subject}`;
  }
}


const jane = new Instructor({
  name: 'Jane',
  location: 'Bedrock',
  age: 37,
  gender: 'female',
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `Don't forget the homies`,
});

const olaf = new Instructor({
  name: 'Olaf',
  location: 'NYC',
  age: 27,
  gender: 'male',
  favLanguage: 'Java',
  specialty: 'Back-end',
  catchPhrase: `Hello, Hello, Hello`,
});

const sammy = new Student({
  name: 'Sammy',
  location: 'NYC',
  age: 27,
  gender: 'female',
  prevBackground: 'Nurse',
  className: 'CS12',
  favSubjects: ['Html', 'CSS', 'JavaScript'],
});

const jon = new Student({
  name: 'Jon',
  location: 'Boston',
  age: 25,
  gender: 'male',
  prevBackground: 'Accountant',
  className: 'CS10',
  favSubjects: ['Android', 'React', 'Node'],
});

const kim = new ProjectManager({
  name: 'Kim',
  location: 'Cali',
  age: 29,
  gender: 'female',
  favLanguage: 'Java',
  specialty: 'Back-end',
  catchPhrase: `Good-day y'all`,
  gradClassName: 'CS5',
  favInstructor: 'Olaf',
});

const jim = new ProjectManager({
  name: 'Jim',
  location: 'Paris',
  age: 23,
  gender: 'male',
  favLanguage: 'Swift',
  specialty: 'Mobile',
  catchPhrase: `Say hello to swift`,
  gradClassName: 'CS5',
  favInstructor: 'Jane',
});

// TEST below

console.log('Instructor Jane speaks::', jane.speak());
console.log('Instructor Jane demos::', jane.demo('JavaScript classes'));
console.log('Instructor Jane grades::', jane.grade(sammy,'React Props'));

console.log('Instructor olaf speaks::', olaf.speak());
console.log('Instructor olaf grades::', olaf.grade(jon, 'callbacks'));
//
console.log('Student Sammy speaks::', sammy.speak());
console.log('Student Sammy Fav subjects::', sammy.listsSubjects());
//
console.log('Student jon speaks::', jon.speak());
console.log('Student jon PR::', jon.PRAssignments('JavaScript'));
console.log('Student jon Sprint::', jon.sprintChallenge('React'));
//
console.log('PM Kim speaks::', kim.speak());
console.log('PM Kim standUp::', kim.standUp('WebPT2'));
//
console.log('PM Jim speaks::', jim.speak());
console.log('PM Jim debugsCode::', jim.debugsCode(jon, 'Java'));
