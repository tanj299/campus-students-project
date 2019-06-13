const Campus=require('./campuses');
const Student=require('./students');

//Associations

Student.belongsTo(Campus); // A one-to-many relationship
Campus.hasMany(Student);// A one-to-one relationship 

Student.belongsTo(Campus,{through:'Campuses'}) // A many-to-many relationship that generates a JOIN table called Campuses
Campus.hasMany(Student,{as:'Students',foreignKey:'studentId'})

module.exports={
    Student,
    Campus

}