process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('data', (data) => {
  const name = data.toString().trim();
  console.log(`Your name is: ${name}`);
});

// Capture la fermeture du flux d'entrée (ex: avec `echo "John" | node 1-stdin.js`)
process.stdin.on('end', () => {
  console.log('This important software is now closing');
});
