const Sequelize = require('sequelize');
const sequelize = require('../db/sequelize');
const User = require('./user');

const Task = sequelize.define('task', {
    id: {
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV1
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false
    },
    completed: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
        defaultValue: false
    }
}, {
    timestamps: true
});

module.exports = Task;