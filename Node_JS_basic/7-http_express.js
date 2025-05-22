// 7-http_express.js

const express = require('express');
const fs = require('fs').promises;

const app = express();

const port = 1245;
const databaseFile = process.argv[2]; // Nom du fichier CSV passé en argument

// Fonction pour lire et analyser le fichier CSV des étudiants
async function countStudents(path) {
  try {
    const data = await fs.readFile(path, 'utf8');
    const lines = data.split('\n').filter(line => line.trim() !== ''); // ignore empty lines

    // Première ligne = header, on l’enlève
    const students = lines.slice(1);

    const fields = {};
    // Structure : map spécialité => liste d’étudiants

    for (const line of students) {
      const parts = line.split(',');
      if (parts.length < 4) continue; // ligne mal formée, on ignore

      const firstname = parts[0].trim();
      const lastname = parts[1].trim();
      // const age = parts[2]; // non utilisé ici
      const field = parts[3].trim();

      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(firstname);
    }

    // Calcul nombre total
    const total = students.length;

    // Préparer la chaîne de retour
    let output = `Number of students: ${total}\n`;

    for (const field of Object.keys(fields).sort()) {
      output += `Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}\n`;
    }

    return output.trim(); // retirer le dernier \n
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

// Route racine
app.get('/', (req, res) => {
  res.type('text/plain');
  res.send('Hello Holberton School!');
});

// Route /students
app.get('/students', async (req, res) => {
  res.type('text/plain');
  if (!databaseFile) {
    return res.send('No database file provided');
  }
  try {
    const data = await countStudents(databaseFile);
    res.send(`This is the list of our students\n${data}`);
  } catch (error) {
    res.send(error.message);
  }
});

if (require.main === module) {
  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
}

module.exports = app;
