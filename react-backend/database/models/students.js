const Sequelize=require('sequelize');
const db=require('../db');

const Student=db.define("students",{
    
    firstName:{
        type:Sequelize.STRING,
        allowNull:false,
        validate:{
            notEmpty: true
        }
    },
    lastName:{
        type:Sequelize.STRING,
        allowNull:false,
        validate:{
            notEmpty: true
        }
    },
    email:{
        type:Sequelize.STRING,
        allowNull:true,
        validate:{
            notEmpty: true
        }
    },
    gpa:{
        type:Sequelize.DECIMAL,
        allowNull:true,
        validate:{
            notEmpty: true
        }
    }

});

module.exports=Student;