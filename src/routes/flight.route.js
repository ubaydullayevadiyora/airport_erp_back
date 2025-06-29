const express = require("express");
const router = express.Router();
const controller = require("../controllers/flight.controller");

router.get("/", controller.getAllFlights);
router.post("/", controller.createFlight);
router.put("/:id", controller.updateFlight);
router.delete("/:id", controller.deleteFlight);

module.exports = router;
