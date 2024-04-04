const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("sqlite::memory:");

const Aulugeul = sequelize.define("Aluguel", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  idCliente: {
    type: DataTypes.INTEGER,
  },
  idCarro: {
    type: DataTypes.INTEGER,
  },
  dataInicio: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  dataFim: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  valorTotal: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
module.exports = Aluguel;
