function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
  if (this.exclude){
    return;
  }

  this.marks.push(...marks);
}

Student.prototype.getAverage = function () {
  if (this.marks.length === 0 || this.exclude){
    return 0;
  }

  const sum = this.marks.reduce((total, mark) => total + mark, 0);
  const average = sum / this.marks.length;
  return average;
}

Student.prototype.exclude = function (reason) {
  this.subject = null;
  this.marks = null;
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

