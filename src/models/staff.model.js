const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Staff = sequelize.define("Staff", {
    fullName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    position: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    shift: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

module.exports = Staff;
