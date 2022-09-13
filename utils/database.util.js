const {Sequelize, DataTypes} = require('sequelize');

const db = new Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'Future3ThreeJS',
    port: 5432,
    database: 'Excercise 1',
    logging: false
});

module.exports = { db, DataTypes };