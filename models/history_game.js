const sequelize = require("./sequelize");
const { Model, DataTypes } = require("sequelize");

class History extends Model {}

History.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      nama_game: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      waktu_penyelesaian: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      skor_game: {
        type: DataTypes.TEXT,
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
      tableName: "user_game_history",
      timestamps: false,
    }
  );
  
  module.exports = History;