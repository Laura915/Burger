//router file with all unique routes
const express= require('express');
let router= express.Router();

//burger model
let burger= require('../models/burger.js');

// Routes 
//get data route
router.get("/",function(req, res) {
    burger.selectAll(function(data) {
      let hbsObject = {
        burgers: data
      };
    //   console.log(hbsObject);
      res.render("index", hbsObject);

    });
  });


  module.exports=router;