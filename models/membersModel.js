import Sequelize from "sequelize";
import { sequelize } from "../db/dbConnection.js";
// create a database connection

const Member = sequelize.define('Member', {
    MemberID:{
        autoincrement: true,
        type: Sequelize.STRING, // string in place of varchar
        allowNull: false,
        primaryKey: true
    },
    Name: {
        type: Sequelize.STRING,
        allowNull: false  
    },
    Gender: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    PhoneNumber:{
        type: Sequelize.STRING,
        allowNull: false
    },
    BirthDate: {
        type: Sequelize.DATE,
        allowNull: false
    },
    Address: {
        type: Sequelize.STRING,
        allowNull: false
    },
    MemberOfficialID: {
        type: Sequelize.STRING,
        allowNull: false
    },
    ReferralID: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
}, {
   sequelize, 
   tableName: "members",
   timestamps: false,
   indexes: [{
       name: "Primary",
       unique: true,
       fields: [
           {name: "MemberID"}
       ]
   }]

})

export default Member