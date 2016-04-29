var express = require('express');
var router = express.Router();
var Run = require('../models/run');

/* GET users listing. */
router.get('/', function(req, res, next) {
  Run.find(function(err, runs){
    if (err) {
      console.log(err);
    } else {
      console.log(runs);
    }
    res.render('index', { title: 'runnr', runs: runs});
  });
  // res.send("HELLO");
});

module.exports = router;
