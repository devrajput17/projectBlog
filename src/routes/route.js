const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const middleware = require ("../middleware/auth")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

module.export=router;