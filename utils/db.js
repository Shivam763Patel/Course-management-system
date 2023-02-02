const {Sequelize}  = require("sequelize");

const sequelize = new Sequelize("shivampa","shivampa","pK593is53CkVsQRLPkRYL1N2",{
    host: '15.206.7.200',
    port: 3310,
    dialect: 'mysql'
  })

  module.exports = sequelize;
