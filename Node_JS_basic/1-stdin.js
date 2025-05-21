// 1-stdin.js

process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.setEncoding('utf8');

process.stdin.on('data', (input) => {
  const trimmedInput = input.trim();
  console.log(`Your name is: ${trimmedInput}`);
});

// Quand l’utilisateur termine (Ctrl+D ou fin du pipe)
process.stdin.on('end', () => {
  console.log('This important software is now closing');
});
