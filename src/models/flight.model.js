const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Flight = sequelize.define("Flight", {
    flightNo: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    destination: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    departureTime: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    status: {
        type: DataTypes.ENUM("On Time", "Delayed", "Cancelled"),
        defaultValue: "On Time",
    },
});

module.exports = Flight;
