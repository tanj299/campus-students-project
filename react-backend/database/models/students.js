const Sequelize=require('sequelize');
const db=require('../db');

const students=db.define("students",{
    firstName:{
        type:Sequelize.STRING,
        allowNull:false
    },
    lastName:{
        type:Sequelize.STRING,
        allowNull:false
    }
});

module.exports=students;