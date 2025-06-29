const express = require("express");
const router = express.Router();

const {
    getAllStaff,
    createStaff,
    updateStaff,
    deleteStaff,
} = require("../controllers/staff.controller");

router.get("/", getAllStaff);       // Barcha stafflar
router.post("/", createStaff);      // Yangi staff qo‘shish
router.put("/:id", updateStaff);    // Ma’lumotni yangilash
router.delete("/:id", deleteStaff); // O‘chirish

module.exports = router;
