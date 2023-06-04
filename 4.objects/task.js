// function Student(name, gender, age) {
//   this.name = name;
//   this.gender = gender;
//   this.age = age;
//   this.marks = [];
// }

// Student.prototype.setSubject = function (subjectName) {
//   this.subject = subjectName;
// }

// Student.prototype.addMarks = function (...marks) {
//   if (typeof this.marks === 'undefined'){
//     return;
//     }

//   this.marks.push(...marks);
// }

// Student.prototype.getAverage = function () {
//   if (!this.marks || this.marks.length === 0){
//     return 0;
//   }

//   const sum = this.marks.reduce((total, mark) => total + mark, 0);
//   const average = sum / this.marks.length;
//   return average;
// }

// Student.prototype.exclude = function (reason) {
//   delete this.subject;
//   delete this.marks;
//   this.excluded = reason;
// }

// let student1 = new Student("Василиса", "женский", 19);
// student1.setSubject("Algebra");
// console.log(student1.getAverage()); // 0
// student1.addMarks(4, 5, 4, 5);
// console.log(student1.getAverage()); // 4.5
// console.log(student1);

// let student2 = new Student("Артём", "мужской", 25);
// student2.setSubject("Geometry");
// student2.exclude('плохая учёба')
// console.log(student2)



// *** third task classes 

function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = {};
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
  this.marks[subjectName] = [];
}

Student.prototype.addMark = function (subjectName, mark) {
  if (marl < 2 || mark > 5){
    return;
    }

  if (!subjectName in this.marks){
    
  }

  this.marks.push(...marks);
}

Student.prototype.getAverage = function () {
  if (!this.marks || this.marks.length === 0){
    return 0;
  }

  const sum = this.marks.reduce((total, mark) => total + mark, 0);
  const average = sum / this.marks.length;
  return average;
}

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}

let student1 = new Student("Василиса", "женский", 19);
student1.setSubject("Algebra");
console.log(student1.getAverage()); // 0
student1.addMarks(4, 5, 4, 5);
console.log(student1.getAverage()); // 4.5
console.log(student1);

let student2 = new Student("Артём", "мужской", 25);
student2.setSubject("Geometry");
student2.exclude('плохая учёба')
console.log(student2)