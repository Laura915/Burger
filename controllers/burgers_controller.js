//router
const express= require('express');
let router= express.Router();

//burger model
let burger= require('../models/burger.js');

//Routes 
//get data route
router.get("/",function(req, res) {
    burger.selectAll(function(data) {
      var hbsObject = {
        burgers: data
      };
      console.log(hbsObject);
     
    });
  });

  module.exports=router;