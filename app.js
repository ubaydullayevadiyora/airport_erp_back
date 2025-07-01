const express = require("express");
const cors = require("cors");
require("dotenv").config();

const sequelize = require("./src/config/db");
const flightRoutes = require("./src/routes/flight.route");
const staffRoutes = require("./src/routes/staff.route");
const logRoutes = require("./src/routes/logs.route");

const app = express();

const corsOptions = {
    origin: ["http://localhost:5173", "https://airport-erp.vercel.app","https://airport-erp.uz"],
    credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());

app.use("/api/flights", flightRoutes);
app.use("/api/staff", staffRoutes);
app.use("/api/logs", logRoutes);

module.exports = { app, sequelize };
