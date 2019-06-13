// Here, we can register our models and export our modified db 
//instance so that it can be imported in the main app;

const db = require('./db');
const Campus=require('./models/campuses');
const Student=require('./models/students');

Student.belongsTo(Campus)//{as:'Students',foreignKey:'StudentId'})// A one-to-one relationship that adds the column titled "studentId" to the table of Campus
Campus.hasMany(Student);// A one-to-one relationship 

module.exports = {db, Campus, Student};