var express = require('express');
var router = express.Router();
var Run = require('../models/run');

/* GET users listing. */
router.get('/', function(req, res, next) {
  Run.find(function(err, runs){
    if (err) console.log(err);
    console.log(runs);
    res.render('runs/index', {title: 'runnr', runs: runs});
  });
});

router.get('/new', function(req, res, next){
  res.render('runs/new', {title: 'runnr'})
})

router.post('/', function(req, res, next){

})

module.exports = router;
