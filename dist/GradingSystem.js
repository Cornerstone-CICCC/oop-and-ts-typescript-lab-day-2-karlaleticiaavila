"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Gradebook {
    constructor() {
        this.students = [];
    }
    addStudent(student) {
        const exists = this.students.some(s => s.id === student.id);
        if (exists)
            return `Student with id ${student.id} already exists.`;
        this.students.push(student);
        return `${student.name} added to the gradebook.`;
    }
    addGrade(id, grade) {
        const student = this.students.find(s => s.id === id);
        if (!student)
            return `Student with id ${id} not found.`;
        student.grades.push(grade);
        return `Grade recorded for ${grade.subject}.`;
    }
    getAverageGrade(id) {
        const student = this.students.find(s => s.id === id);
        if (!student || student.grades.length === 0)
            return 0;
        const sum = student.grades.reduce((acc, g) => acc + g.grade, 0);
        return sum / student.grades.length;
    }
    getStudentGrades(id) {
        const student = this.students.find(s => s.id === id);
        return student ? student.grades : [];
    }
    updateSubjectGrade(id, subject, newGrade) {
        const student = this.students.find(s => s.id === id);
        if (!student)
            return `Student with id ${id} not found.`;
        const gradeItem = student.grades.find(g => g.subject === subject);
        if (!gradeItem)
            return `Subject ${subject} not found for student ${id}.`;
        gradeItem.grade = newGrade;
        return `Grade updated for ${subject}.`;
    }
}
// Test
const gradebook = new Gradebook();
console.log(gradebook.addStudent({ id: 1, name: "Alice", grades: [] }));
console.log(gradebook.addGrade(1, { subject: "Math", grade: 90 }));
console.log(gradebook.addGrade(1, { subject: "English", grade: 80 }));
console.log(gradebook.getStudentGrades(1));
console.log(gradebook.getAverageGrade(1));
console.log(gradebook.updateSubjectGrade(1, "English", 95));
