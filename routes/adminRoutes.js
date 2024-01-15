const express = require("express");
const router = express.Router();
const { createCareCompaign } = require("../controllers/adminController");

router.post("/careCompaign", createCareCompaign);

module.exports = router;
