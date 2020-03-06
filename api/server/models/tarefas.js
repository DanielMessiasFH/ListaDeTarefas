'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tarefas = sequelize.define('Tarefas', {
    descricao: DataTypes.STRING,
    data_criacao: DataTypes.DATE,
    status: DataTypes.STRING
  });
  
  return Tarefas;
};