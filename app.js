const express = require("express");
const cors = require("cors");
require("dotenv").config();

const sequelize = require("./src/config/db");
const flightRoutes = require("./src/routes/flight.route");
const staffRoutes = require("./src/routes/staff.route");
const logRoutes = require("./src/routes/logs.route");

const app = express();

app.use(cors());
app.use(express.json());

// app.use("/api/staff", staffRoutes);
// app.use("/api/logs", logRoutes);
app.use("/api/flights", flightRoutes);

const PORT = process.env.PORT || 6000;

sequelize.sync({ force: false }).then(() => {
    console.log("Database connected");
    app.listen(PORT, () => {
        console.log("Server running on port", PORT);
    });
});
