const Flight = require("../models/flight.model");

const getAllFlights = async (req, res) => {
    const flights = await Flight.findAll();
    res.json(flights);
};

const createFlight = async (req, res) => {
    const flight = await Flight.create(req.body);
    res.status(201).json(flight);
};

const updateFlight = async (req, res) => {
    const { id } = req.params;
    await Flight.update(req.body, { where: { id } });
    res.json({ message: "Flight updated" });
};

const deleteFlight = async (req, res) => {
    const { id } = req.params;
    await Flight.destroy({ where: { id } });
    res.json({ message: "Flight deleted" });
};

module.exports = {
    getAllFlights,
    createFlight,
    updateFlight,
    deleteFlight,
};
