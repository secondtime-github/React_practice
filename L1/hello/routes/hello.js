var express = require('express');
var router = express.Router();

/* GET hello page. */
router.get('/', function(req, res, next) {
  res.render('hello', {
    name : req.query.name,
    mail : req.query.mail
  });
});

module.exports = router;
