const http = require('http');
const fs = require('fs').promises;

const countStudents = async (path) => {
  try {
    const content = await fs.readFile(path, 'utf8');
    const lines = content.split('\n').filter(line => line.trim() !== '');

    const students = lines.slice(1); // Ignore header
    const fields = {};

    for (const line of students) {
      const parts = line.split(',');
      if (parts.length >= 4) {
        const firstname = parts[0];
        const field = parts[3];

        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(firstname);
      }
    }

    const total = Object.values(fields).reduce((sum, arr) => sum + arr.length, 0);
    let report = `Number of students: ${total}\n`;

    for (const [field, names] of Object.entries(fields)) {
      report += `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`;
    }

    return report.trim(); // remove trailing newline
  } catch (err) {
    throw new Error('Cannot load the database');
  }
};

const app = http.createServer(async (req, res) => {
  const dbPath = process.argv[2];

  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('This is the list of our students\n');

    try {
      const report = await countStudents(dbPath);
      res.end(report);
    } catch (err) {
      res.end(err.message);
    }
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

app.listen(1245);
module.exports = app;
