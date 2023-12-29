const express = require("express");
const { fetchAllData, createData, updateData } = require("../controller/data");

const router = express.Router();

router.post("/", createData).get("/", fetchAllData).patch("/:id", updateData);

exports.router = router;
