export default function createEmployeesObject(departmentName, employees) {
  return {
    [departmentName]: employees,  // Clé dynamique : departmentName, valeur : employees
  };
}

