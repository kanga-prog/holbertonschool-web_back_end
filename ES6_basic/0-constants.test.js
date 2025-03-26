// Importation des fonctions à tester
import { taskFirst, taskNext } from './0-constants';

// Tests pour la fonction taskFirst
describe('taskFirst', () => {
  it('should return the correct string', () => {
    const result = taskFirst();
    expect(result).toBe('I prefer const when I can.');
  });
});

// Tests pour la fonction taskNext
describe('taskNext', () => {
  it('should return the correct combined string', () => {
    const result = taskNext();
    expect(result).toBe('But sometimes let is okay');
  });
});

