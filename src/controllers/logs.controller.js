const Log = require("../models/logs.model");

const getAllLogs = async (req, res) => {
    try {
        const logs = await Log.findAll({ order: [["timestamp", "DESC"]] });
        res.json(logs);
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
};

const createLog = async (req, res) => {
    try {
        const newLog = await Log.create(req.body);
        res.status(201).json(newLog);
    } catch (error) {
        res.status(400).json({ error: "Failed to create log" });
    }
};

module.exports = { getAllLogs, createLog };
