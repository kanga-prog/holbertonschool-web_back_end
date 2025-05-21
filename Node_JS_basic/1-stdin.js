// 1-stdin.js

// Log first line
process.stdout.write('Welcome to Holberton School, what is your name?\n');

// Start stdin process
process.stdin.setEncoding('utf8');

process.stdin
  .on('readable', () => {
    const input = process.stdin.read();
    if (input !== null) {
      const name = input.trim();
      process.stdout.write(`Your name is: ${name}\n`);
    }
  })
  .on('end', () => {
    process.stdout.write('This important software is now closing\n');
  });
