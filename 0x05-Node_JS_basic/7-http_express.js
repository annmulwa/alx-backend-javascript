const express = require('express');
const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, { encoding: 'utf-8' }, (err, data) => {
      if (err) return reject(Error('Cannot load the database'));
      // split data and take only the list without the header
      const filelines = data.split('\n').slice(1, -1);
      // header of the data
      const header = data.split('\n').slice(0, 1)[0].split(',');
      // firstname and field index
      const indexfn = header.findIndex((elem) => elem === 'firstname');
      const indexfd = header.findIndex((elem) => elem === 'field');
      // declarate two dictionaries for count each fields and store list of students
      const fields = {};
      const students = {};
      // all data
      const all = {};

      filelines.forEach((line) => {
        const list = line.split(',');
        if (!fields[list[indexfd]]) fields[list[indexfd]] = 0;
        fields[list[indexfd]] += 1;
        if (!students[list[indexfd]]) students[list[indexfd]] = '';
        students[list[indexfd]] += students[list[indexfd]]
          ? `, ${list[indexfn]}`
          : list[indexfn];
      });

      all.numberStudents = `Number of students: ${filelines.length}\n`;
      all.listStudents = [];
      for (const key in fields) {
        if (Object.hasOwnProperty.call(fields, key)) {
          const element = fields[key];
          all.listStudents.push(`Number of students in ${key}: ${element}. List: ${students[key]}`);
        }
      }
      return resolve(all);
    });
  });
}

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});
app.get('/students', (req, res) => {
  res.write('This is the list of our students\n');
  countStudents(process.argv[2])
    .then((data) => {
      res.write(data.numberStudents);
      res.end(data.listStudents.join('\n'));
    })
    .catch((err) => {
      res.end(err.message);
    });
});
app.listen(port);

module.exports = app;
