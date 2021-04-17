import Sequelize from "sequelize";
import { sequelize } from "../db/dbConnection.js";
 
const Books = sequelize.define('Books', {
    ISBN: {
      type: Sequelize.STRING(13),
      allowNull: true,
      primaryKey: true
    },
    Title: {
      type: Sequelize.STRING(30),
      allowNull: true
    },
    Author: {
      type: Sequelize.STRING(20),
      allowNull: true
    },
    PublishDate: {
      type: Sequelize.DATEONLY,
      allowNull: true
    },
    NumberOfCopies: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    Genre: {
      type: Sequelize.STRING(10),
      allowNull: true
    }
  }, {
    sequelize,
  tableName: 'books',
  timestamps: false,
  indexes: [
    {
      name: "PRIMARY",
      unique: true,
      using: "BTREE",
      fields: [
        { name: "book_id" },
      ]
    },
  ]
});

export default Books
