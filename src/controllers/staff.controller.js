const Staff = require("../models/staff.model");

const getAllStaff = async (req, res) => {
    try {
        const staffList = await Staff.findAll();
        res.json(staffList);
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
};

const createStaff = async (req, res) => {
    try {
        const newStaff = await Staff.create(req.body);
        res.status(201).json(newStaff);
    } catch (error) {
        res.status(400).json({ error: "Validation error" });
    }
};

const updateStaff = async (req, res) => {
    try {
        const { id } = req.params;
        const staff = await Staff.findByPk(id);
        if (!staff) return res.status(404).json({ error: "Staff not found" });

        await staff.update(req.body);
        res.json(staff);
    } catch (error) {
        res.status(400).json({ error: "Update failed" });
    }
};

const deleteStaff = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Staff.destroy({ where: { id } });
        if (!deleted) return res.status(404).json({ error: "Not found" });

        res.json({ message: "Staff deleted" });
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
};

module.exports = { getAllStaff, createStaff, updateStaff, deleteStaff };
