// Домашне завдання № 9 заняття 10
// Вправа № 1-3

// Конструктор Student
function Student(firstName, lastName, birthYear, course) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
    this.course = course;
  
    this.maxGrades = { 1: 5, 2: 8, 3: 10 }; // Кількість оцінок для кожного курсу
    this.maxAttendances = { 1: 20, 2: 25, 3: 30 }; // Кількість відвідувань для кожного курсу
  
    this.grades = [];
    this.attendances = [];
  }
  
  // Метод для додавання оцінки
  Student.prototype.addGrade = function(grade) {
    if (this.grades.length < this.maxGrades[this.course]) {
      this.grades.push(grade);
      console.log(`Оцінка ${grade} додана.`);
    } else {
      console.log('Досягнуто максимальну кількість оцінок для даного курсу.');
    }
  };
  
  // Метод для додавання відвідування
  Student.prototype.addAttendance = function(attendance) {
    if (this.attendances.length < this.maxAttendances[this.course]) {
      this.attendances.push(attendance);
      console.log('Відвідування додано.');
    } else {
      console.log('Досягнуто максимальну кількість відвідувань для даного курсу.');
    }
  };
  
  // Метод для отримання середньої успішності
  Student.prototype.getAverageGrade = function() {
    const sum = this.grades.reduce((acc, curr) => acc + curr, 0);
    return this.grades.length > 0 ? sum / this.grades.length : 0;
  };
  
  // Метод для отримання середнього відвідування
  Student.prototype.getAverageAttendance = function() {
    return this.attendances.length > 0 ? this.attendances.length / this.maxAttendances[this.course] : 0;
  };
  
  // Метод для отримання кількості пройдених занять
  Student.prototype.getNumberOfAttendances = function() {
    return this.attendances.length;
  };
  
  // Метод для зміни курсу
  Student.prototype.changeCourse = function(newCourse) {
    this.course = newCourse;
    console.log(`Студент переведений на ${newCourse} курс.`);
  };
  
  // Метод для отримання інформації про студента
  Student.prototype.getStudentInfo = function() {
    return `
      Ім'я: ${this.firstName},
      Прізвище: ${this.lastName},
      Рік народження: ${this.birthYear},
      Курс: ${this.course},
      Оцінки: ${this.grades.join(', ')},
      Відвідуваність: ${this.attendances.length}/${this.maxAttendances[this.course]}
    `;
  };
  
  // Конструктор Group
  function Group() {
    this.students = []; // Масив студентів
  }
  
  // Метод для додавання студента до групи
  Group.prototype.addStudent = function(student) {
    this.students.push(student);
    console.log(`Студент ${student.firstName} ${student.lastName} доданий до групи.`);
  };
  
  // Метод для видалення студента з групи
  Group.prototype.removeStudent = function(student) {
    const index = this.students.indexOf(student);
    if (index !== -1) {
      this.students.splice(index, 1);
      console.log(`Студент ${student.firstName} ${student.lastName} видалений з групи.`);
    } else {
      console.log(`Студент ${student.firstName} ${student.lastName} не знайдений у групі.`);
    }
  };
  
  // Метод для отримання рейтингу за відвідуваністю
  Group.prototype.getAttendanceRating = function() {
    let totalAttendances = 0;
    this.students.forEach(student => {
      totalAttendances += student.attendances.length;
    });
    const averageAttendance = totalAttendances / this.students.length;
    return (averageAttendance / 30) * 100; // Припускаємо, що загальна кількість занять = 30
  };
  
  // Метод для отримання рейтингу за успішністю
  Group.prototype.getGradesRating = function() {
    let totalGrades = 0;
    let totalStudents = 0;
    this.students.forEach(student => {
      totalGrades += student.grades.reduce((acc, curr) => acc + curr, 0);
      totalStudents += student.grades.length;
    });
    const averageGrade = totalGrades / totalStudents || 0;
    return averageGrade;
  };
  
  // Приклад використання:
  
  // Створення студентів
  const student1 = new Student('Іван', 'Петров', 2000, 1);
  const student2 = new Student('Марія', 'Іванова', 1999, 2);
  
  // Додавання студентів до групи
  const group = new Group();
  group.addStudent(student1);
  group.addStudent(student2);
  
  // Виклик методів для студентів
  student1.addGrade(4);
  student1.addAttendance('Заняття 1');
  student2.addGrade(5);
  student2.addAttendance('Заняття 1');
  student2.changeCourse(3);
  
  // Отримання інформації про студентів
  console.log(student1.getStudentInfo());
  console.log(student2.getStudentInfo());
  
  // Отримання рейтингу групи за відвідуваністю та успішністю
  console.log(`Рейтинг групи за відвідуваністю: ${group.getAttendanceRating()}%`);
  console.log(`Рейтинг групи за успішністю: ${group.getGradesRating()}`);
  
  
