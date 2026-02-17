// 🎓 Student Grading System
// 🏫 Create a system that manages student records and calculates their average grade.
//
// 1. Implement a class `Gradebook<T>` to store student records.
// 2. Implement a method `addStudent` that adds a new student with an empty grade list.
// 3. Implement a method `addGrade` that records a new grade for a student.
// 4. Implement a method `getAverageGrade` that returns a student’s average grade. (Formula to get average: sumOfAllGrades / numberOfSubjects)
// 5. Implement a method `getStudentGrades` that returns all recorded grades for a student. 
// 6. Implement a method `updateSubjectGrade` that updates a subject grade for a student.
interface Grade {
  subject: string;
  grade: number;
}

interface Student {
  id: number;
  name: string;
  grades: Grade[];
}

class Gradebook<T extends Student> {
  private students: T[] = [];

  addStudent(student: T): string {
    const exists = this.students.some(s => s.id === student.id);
    if (exists) return `Student with id ${student.id} already exists.`;
    this.students.push(student);
    return `${student.name} added to the gradebook.`;
  }

  addGrade(id: number, grade: Grade): string {
    const student = this.students.find(s => s.id === id);
    if (!student) return `Student with id ${id} not found.`;
    student.grades.push(grade);
    return `Grade recorded for ${grade.subject}.`;
  }

  getAverageGrade(id: number): number {
    const student = this.students.find(s => s.id === id);
    if (!student || student.grades.length === 0) return 0;
    const sum = student.grades.reduce((acc, g) => acc + g.grade, 0);
    return sum / student.grades.length;
  }

  getStudentGrades(id: number): Grade[] {
    const student = this.students.find(s => s.id === id);
    return student ? student.grades : [];
  }

  updateSubjectGrade(id: number, subject: string, newGrade: number): string {
    const student = this.students.find(s => s.id === id);
    if (!student) return `Student with id ${id} not found.`;

    const gradeItem = student.grades.find(g => g.subject === subject);
    if (!gradeItem) return `Subject ${subject} not found for student ${id}.`;

    gradeItem.grade = newGrade;
    return `Grade updated for ${subject}.`;
  }
}

// Test
const gradebook = new Gradebook<Student>();
console.log(gradebook.addStudent({ id: 1, name: "Alice", grades: [] }));
console.log(gradebook.addGrade(1, { subject: "Math", grade: 90 }));
console.log(gradebook.addGrade(1, { subject: "English", grade: 80 }));
console.log(gradebook.getStudentGrades(1));
console.log(gradebook.getAverageGrade(1));
console.log(gradebook.updateSubjectGrade(1, "English", 95));


export {};