const Sequelize=require('sequelize');
const db=require('../db');

const campuses=db.define("campuses",{
    name:{
        type:Sequelize.STRING,
        allowNull:false
    },
    address:{
        type:Sequelize.STRING,
        allowNull:false
    }
});

module.exports=campuses;