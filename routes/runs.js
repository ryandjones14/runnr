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

router.post('/', function(req, res, next) {
    var time = req.body.time;
    var distance = req.body.distance;
    var location = req.body.location;
    var difficulty = req.body.difficulty;
    var image = req.body.image;
    var backURL = req.header('Referer') || '/';

    var newRun = Run({
        date: new Date(),
        time: time,
        distance: distance,
        location: location,
        difficulty: difficulty,
        image: image
    });

    // Save the user
    newRun.save(function(err, user) {
        if (err) console.log(err);

        res.redirect(backURL);
    });
});

module.exports = router;
