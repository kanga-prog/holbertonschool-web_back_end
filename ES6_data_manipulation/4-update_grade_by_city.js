function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location === city) // Filtrer les étudiants par ville
    .map((student) => {
      // Chercher la note correspondante pour cet étudiant dans newGrades
      const studentGrade = newGrades.find((grade) => grade.studentId === student.id);

      // Si une note est trouvée, l'utiliser, sinon assigner "N/A"
      return {
        ...student, // Garder toutes les informations de l'étudiant
        grade: studentGrade ? studentGrade.grade : 'N/A',
      };
    });
}
