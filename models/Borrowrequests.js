import Sequelize from "sequelize";
import { sequelize } from "../db/dbConnection.js";


const Borrowrequests = sequelize.define('Borrowrequests', {
    RequestNumber: {
      type: Sequelize.STRING(5),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    MemberID: {
      type: Sequelize.STRING(10),
      allowNull: true
    },
    ISBN: {
      type: Sequelize.STRING(13),
      allowNull: true
    },
    DateBorrowed: {
      type: Sequelize.DATEONLY,
      allowNull: true
    },
    ReturnDate: {
      type: Sequelize.DATEONLY,
      allowNull: true
    }
  }, {
    sequelize,
    modelName: 'Borrowrequests',
    freezeTableName: true,
    timestamps: false
  }
);

export default Borrowrequests