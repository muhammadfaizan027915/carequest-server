const express = require("express");
const router = express.Router();
const { getCareCompaign } = require("../controllers/homeController");

router.get("/careCompaign", getCareCompaign);

module.exports = router;
