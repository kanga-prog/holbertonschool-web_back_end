// full_server/controllers/StudentsController.js
import { readDatabase } from '../utils';

class StudentsController {
  static getAllStudents(req, res) {
    const path = process.argv[2];
    readDatabase(path)
      .then((students) => {
        let response = 'This is the list of our students\n';
        const fields = Object.keys(students).sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

        for (const field of fields) {
          const list = students[field];
          response += `Number of students in ${field}: ${list.length}. List: ${list.join(', ')}\n`;
        }

        res.status(200).send(response.trim());
      })
      .catch(() => res.status(500).send('Cannot load the database'));
  }

  static getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    const path = process.argv[2];

    if (major !== 'CS' && major !== 'SWE') {
      return res.status(500).send('Major parameter must be CS or SWE');
    }

    readDatabase(path)
      .then((students) => {
        const list = students[major];
        if (!list) return res.status(200).send('List:');
        return res.status(200).send(`List: ${list.join(', ')}`);
      })
      .catch(() => res.status(500).send('Cannot load the database'));
  }
}

export default StudentsController;
