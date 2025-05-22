// full_server/utils.js
import fs from 'fs';

export function readDatabase(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) return reject(new Error('Cannot load the database'));

      const lines = data.trim().split('\n');
      const students = {};

      if (lines.length > 1) {
        for (const line of lines.slice(1)) {
          if (!line) continue; // ignore lignes vides
          const parts = line.split(',');
          const firstname = parts[0];
          const field = parts[3];

          if (!students[field]) students[field] = [];
          students[field].push(firstname);
        }
      }
      resolve(students);
    });
  });
}
