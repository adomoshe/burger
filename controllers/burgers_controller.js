const express = require('express');
const router = express.Router();
const burger = require("../models/burger.js");

router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        const hbsObject = { burgers: data };
        console.log('hbsObject: ', hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function (req, res) {
    console.log(req)
    burger.insertOne(req.body.newBurger, function (result) {
        res.json({ id: result.insertId });
        console.log('result.insertid: ' + result.insertId);
    });
});

router.put("/api/burgers/:id", function (req, res) {
    const id = req.params.id;
    let changedStatus;
    console.log(req.body.devour)
    if (req.body.devour === 'true') { changedStatus = true }
    if (req.body.devour === 'false') { changedStatus = false }
    console.log('changedstatus: ', changedStatus);

    console.log("id: " + id);

    burger.updateOne(id, changedStatus, function (result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

router.delete("/api/burgers/:id", function (req, res) {
    const id = req.params.id;
    burger.deleteOne(id, function (result) {
        if (result.affectedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;
