const readDatabase = require('../utils');

module.exports = class StudentsController {
  static getAllStudents(request, response) {
    readDatabase(process.argv[2])
      .then((data) => {
        let printedData = 'This is the list of our students';
        for (const field in data) {
          if (Object.hasOwnProperty.call(data, field)) {
            const element = data[field];
            printedData += `\nNumber of students in ${field}: ${element.number}. ${element.students}`;
          }
        }
        response.send(printedData);
      })
      .catch((err) => { response.send(err.message); });
  }

  static getAllStudentsByMajor(request, response) {
    if (!['SWE', 'CS'].includes(request.params.major)) response.status(500).send('Major parameter must be CS or SWE');
    readDatabase(process.argv[2])
      .then((data) => {
        const printedData = data[request.params.major].students;
        if (printedData) response.send(printedData);
        response.status(500).send('Major parameter must be CS or SWE');
      })
      .catch((err) => { response.send(err.message); });
  }
};
