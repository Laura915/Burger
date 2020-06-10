//router file with all unique routes
const express = require('express');
let router = express.Router();

//burger model
let burger = require('../models/burger.js');

// Routes 
//get data route
router.get("/", function (req, res) {
  burger.selectAll(function (data) {
    let hbsObject = {
      burgers: data
    };
    res.render("index", hbsObject);
  });
});

//post new data route
router.post("/api/burger", function (req, res) {
  burger.insertOne(
    [
      "burger_name", "devoured"
    ],
    [
      req.body.burger_name, req.body.devoured
    ], function (result) {
      console.log(result);
      res.json({ id: result.insertedID });
    }
  )
})


module.exports = router;