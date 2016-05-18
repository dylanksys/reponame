var router = require('express').Router();

// Change API methods and endpoint methods to fit your needs

router.get('/2kewl', function(req, res) {
  res.send('Path: /2kewl');
};

router.get('/what', function(req, res) {
  res.send('Path: /what');
};

router.get('/the', function(req, res) {
  res.send('Path: /the');
};

module.exports = router;
