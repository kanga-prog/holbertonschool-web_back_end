export default function createReportObject(employeesList) {
  return {
    allEmployees: employeesList,  // assigne employeesList à la clé allEmployees
    getNumberOfDepartments() {  // méthode pour compter le nombre de départements
      return Object.keys(this.allEmployees).length;  // retourne le nombre de départements
    }
  };
}

