const Sequelize=require('sequelize');
const db=require('../db');

const campuses=db.define("campuses",{
    id:{
        type:Sequelize.INTEGER,
        unique:true,
        allowNull:false,
        validate:{
            notEmpty: true
        }
    },
    name:{
        type:Sequelize.STRING,
        unique:true,
        allowNull:false,
        validate:{
            notEmpty: true
        }
    },
    address:{
        type:Sequelize.STRING,
        allowNull:false,
        validate:{
            notEmpty: true
        }
    },
    imageUrl:{
        type:Sequelize.STRING,
        allowNull:false,
        defaultValue:""
    },
    description:{
        type:Sequelize.TEXT,
        // allowNull:true
    }

});

module.exports=campuses;