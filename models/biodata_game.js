const sequelize = require("./sequelize");
const { Model, DataTypes } = require("sequelize");

class Biodata extends Model {}

Biodata.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      nama: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      alamat: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      no_hp: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        length: 100,
        allowNull: false,
      },
      users_id: {
        type: DataTypes.INTEGER,
        references: {
          model:{
            tableName: 'user_game',
            key: 'id'
          }
        }
      }
    },
    {
      sequelize,
      tableName: "user_game_biodata",
      timestamps: false,
    }
  );
  
  module.exports = Biodata;