const fs = require('fs');

module.exports = function countStudents(path) {
  try {
    // read file data Synchronously
    const filedata = fs.readFileSync(path, { encoding: 'utf-8' });
    // split data and taking the list without the header
    const filelines = filedata.split('\n').slice(1, -1);
    // header of file data
    const header = filedata.split('\n').slice(0, 1)[0].split(',');
    // find firstname and field index in the file
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
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};
