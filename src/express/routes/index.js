var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", async (req, res, next) => {
    res.json({ foo: "bar" });
});

/* GET home page. */
router.get("/test", async (req, res, next) => {
    res.json({ foo: "BOOM!!", now: new Date() });
});

module.exports = router;
