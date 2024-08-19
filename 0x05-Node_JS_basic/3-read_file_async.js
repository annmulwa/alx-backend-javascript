const fs = require('fs');

module.exports = function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, { encoding: 'utf-8' }, (err, data) => {
      if (err) return reject(Error('Cannot load the database'));
      // split data and take only the list without the header
      const filelines = data.split('\n').slice(1, -1);
      // header of the file data
      const header = data.split('\n').slice(0, 1)[0].split(',');
      // firstname and field index of the file
      const indexfn = header.findIndex((elem) => elem === 'firstname');
      const indexfd = header.findIndex((elem) => elem === 'field');
      // declarate two dictionaries for count each fields and store list of students
      const fields = {};
      const students = {};

      filelines.forEach((line) => {
        const list = line.split(',');
        if (!fields[list[indexfd]]) fields[list[indexfd]] = 0;
        fields[list[indexfd]] += 1;
        if (!students[list[indexfd]]) students[list[indexfd]] = '';
        students[list[indexfd]] += students[list[indexfd]] ? `, ${list[indexfn]}` : list[indexfn];
      });

      console.log(`Number of students: ${filelines.length}`);
      for (const key in fields) {
        if (Object.hasOwnProperty.call(fields, key)) {
          const element = fields[key];
          console.log(`Number of students in ${key}: ${element}. List: ${students[key]}`);
        }
      }
      return resolve();
    });
  });
};
