// Here, we can prepare to register our models, set up associations between tables, and generate a barrel file for the models;
// const db = require('../db')
const Campus=require('./campuses');
const Student=require('./students');

//Associations
//Source.association(Target);

//Student.hasOne(Campus);// A one-to-one relationship 
// Student.belongsTo(Campus)//{as:'Students',foreignKey:'StudentId'})// A one-to-one relationship that adds the column titled "studentId" to the table of Campus
// Campus.hasMany(Student);// A one-to-one relationship 
//Campus.hasMany(Student,{as:'Students',foreignKey:'studentId'})

//The hasOne() association provides the following methods for the instance of the Source;
//Using our specific example, hasMany() makes the following methods available and scenarios possible;
// Student.getCampus;
// Student.setCampus;
// Student.addCampus;
// Student.createCampus;
// Student.removeCampus;
// Student.hasCampus;

//The hasMany() association provides the following methods for the instance of the Source:
//Using our specific example, hasMany() makes the following methods available and scenarios possible;
// Campus.getStudent;
// Campus.setStudent;
// Campus.addStudent;
// Campus.removeStudent;
// Campus.hasStudent;

//The belongsTo() association provides the following methods for the instance of the Source:


module.exports={
    Student,
    Campus
}
