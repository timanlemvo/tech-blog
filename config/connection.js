const Sequelize = require('sequelize');
const dotenv = require('dotenv');

const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(
    process.env.DB_APP_DATABASE,
    process.env.DB_USER, 
    process.env.DB_PASS, 
    {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      dialect: 'mysql'
    });

module.exports = sequelize;