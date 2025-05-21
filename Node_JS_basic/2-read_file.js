const fs = require('fs');

function countStudents(path) {
  try {
    const content = fs.readFileSync(path, 'utf8');
    const lines = content.trim().split('\n');
    const headers = lines[0].split(',');

    const students = lines
      .slice(1)
      .filter((line) => line.trim() !== '')
      .map((line) => {
        const values = line.split(',');
        const student = {};
        headers.forEach((header, index) => {
          student[header] = values[index];
        });
        return student;
      });

    console.log(`Number of students: ${students.length}`);

    const fields = {};
    for (const student of students) {
      const field = student.field;
      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(student.firstname);
    }

    for (const [field, names] of Object.entries(fields)) {
      console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
