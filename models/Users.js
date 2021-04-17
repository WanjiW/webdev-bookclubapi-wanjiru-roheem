import Sequelize from "sequelize";
import { sequelize } from "../db/dbConnection.js";

// const sequelize = require("../config/env.js");
// const Sequelize = require("sequelize");
// const Model = Sequelize.Model;

// class Members extends Model {}

const Users = sequelize.define('user', {
    UserID: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    FullName: {
      type: Sequelize.STRING(255),
      allowNull: true
    },
    Email: {
      type: Sequelize.STRING(255),
      allowNull: true
    },
    Password: {
      type: Sequelize.STRING(255),
      allowNull: true
    },
    
  }, {
    sequelize,
    tableName: 'users',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "UserID" },
        ]
      },
    ]
  });
export default Users
