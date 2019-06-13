const {Student}=require('../database');


const students=[
    Student.create({ 
    firstName: 'John', 
    lastName: 'Smith', 
    email: 'jsmith@gmail.com',
    gpa: 3.5
    }),
    Student.create({
    firstName: "Albert",
    lastName: "Albertson",
    email: "al@example.com",
    gpa:2.0
})]
module.exports=students;