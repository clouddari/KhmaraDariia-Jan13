class Student {
  constructor(name, lastName, yearOfBirth, marks = []) {
    this.name = name;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.marks = marks;
    this.attendance = new Array(25).fill(null);
    this._attendanceIndex = 0;
  }

  getAge() {
    const currentYear = new Date().getFullYear();
    return currentYear - this.yearOfBirth;
  }

  getAverageMark() {
    if (this.marks.length === 0) return 0;

    const sum = this.marks.reduce((acc, mark) => acc + mark, 0);
    return sum / this.marks.length;
  }

  present() {
    if (this._attendanceIndex < 25) {
      this.attendance[this._attendanceIndex] = true;
      this._attendanceIndex++;
    } else {
      alert("Відвідуваність вже заповнена!");
    }
  }

  absent() {
    if (this._attendanceIndex < 25) {
      this.attendance[this._attendanceIndex] = false;
      this._attendanceIndex++;
    } else {
      alert("Відвідуваність вже заповнена!");
    }
  }

  summary() {
    const avgMark = this.getAverageMark();
    const attendedClasses = this.attendance.filter((a) => a === true).length;
    const totalMarked = this.attendance.filter((a) => a !== null).length;
    const attendanceRate = totalMarked > 0 ? attendedClasses / totalMarked : 0;

    if (avgMark > 90 && attendanceRate > 0.9) {
      return "Молодець!";
    } else if (avgMark > 90 || attendanceRate > 0.9) {
      return "Добре, але можна краще";
    } else {
      return "Редиска!";
    }
  }
}

const STUDENT_1 = new Student(
  "Serhii",
  "Kravchenko",
  1995,
  (marks = [100, 100, 99, 98, 100, 100, 99])
);
const STUDENT_2 = new Student(
  "Alina",
  "Chorna",
  2002,
  (marks = [100, 100, 65, 95, 80, 100])
);
const STUDENT_3 = new Student(
  "Stepan",
  "Melnychenko",
  1999,
  (marks = [90, 100, 85])
);

const ul = document.querySelector(".student-list-ul");
let students = [STUDENT_1, STUDENT_2, STUDENT_3];

students.forEach((student) => {
  const li = document.createElement("li");
  li.classList.add("student-item");

  const nameSpan = document.createElement("span");
  nameSpan.textContent = `${student.name} ${
    student.lastName
  }, ${student.getAge()}`;

  const divButtons = document.createElement("div");
  divButtons.classList.add("buttons");

  const presentButton = document.createElement("button");
  presentButton.classList.add("present-button");
  presentButton.textContent = "Present";

  const absentButton = document.createElement("button");
  absentButton.classList.add("absent-button");
  absentButton.textContent = "Absent";

  const summaryButton = document.createElement("button");
  summaryButton.classList.add("summary-button");
  summaryButton.textContent = "Summary";

  ul.appendChild(nameSpan);
  ul.appendChild(li);
  li.appendChild(divButtons);
  divButtons.appendChild(presentButton);
  divButtons.appendChild(absentButton);
  divButtons.appendChild(summaryButton);

  presentButton.addEventListener("click", () => {
    student.present();
    console.log(`${student.name} is marked present`);
  });

  absentButton.addEventListener("click", () => {
    student.absent();
    console.log(`${student.name} is marked absent`);
  });

  summaryButton.addEventListener("click", () => {
    const summaryContent = document.createElement("p");
    summaryContent.textContent = `${student.name} ${student.summary()}`;
    li.appendChild(summaryContent);
  });
});
