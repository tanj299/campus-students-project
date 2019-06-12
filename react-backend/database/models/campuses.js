const Sequelize=require('sequelize');
const db=require('../db');

const campuses=db.define("campuses",{
    id:{
        type:Sequelize.INTEGER,
        unique:true,
        allowNull:false,
    },
    name:{
        type:Sequelize.STRING,
        allowNull:false,
    },
    address:{
        type:Sequelize.STRING,
        allowNull:false
    },
    imageUrl:{
        type:Sequelize.STRING,
        allowNull:false,
        defaultValue:""
    },
    description:{
        type:Sequelize.TEXT,
        allowNull:true
    }

});

module.exports=campuses;