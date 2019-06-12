const Sequelize=require('sequelize');
const db=require('../db');

const students=db.define("students",{
    id:{
        type:Sequelize.INTEGER,
        allowNull:false
    },
    firstName:{
        type:Sequelize.STRING,
        allowNull:false
    },
    lastName:{
        type:Sequelize.STRING,
        allowNull:false
    },
    email:{
        type:Sequelize.STRING,
        allowNull:true
    },
    gpa:{
        type:Sequelize.DECIMAL,
        allowNull:true
    }

});

module.exports=students;