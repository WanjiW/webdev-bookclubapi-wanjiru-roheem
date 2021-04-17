import Sequelize from "sequelize";
import { sequelize } from "../db/dbConnection.js";

// const sequelize = require("../config/env.js");
// const Sequelize = require("sequelize");
// const Model = Sequelize.Model;

// class Members extends Model {}

const Members = sequelize.define('member', {
    MemberID: {
      type: Sequelize.STRING(10),
      allowNull: false,
      primaryKey: true
    },
    Name: {
      type: Sequelize.STRING(20),
      allowNull: true
    },
    Gender: {
      type: Sequelize.STRING(20),
      allowNull: true
    },
    Email: {
      type: Sequelize.STRING(30),
      allowNull: true
    },
    PhoneNumber: {
      type: Sequelize.STRING(10),
      allowNull: true
    },
    BirthDate: {
      type: Sequelize.DATEONLY,
      allowNull: true
    },
    Address: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    MemberOfficialID: {
      type: Sequelize.STRING(20),
      allowNull: true
    },
    ReferralID: {
      type: Sequelize.STRING(10),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'members',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "MemberID" },
        ]
      },
    ]
  });
export default Members
