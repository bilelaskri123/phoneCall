const { Sequelize } = require('sequelize'); 

const sequelize = new Sequelize('contact', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;