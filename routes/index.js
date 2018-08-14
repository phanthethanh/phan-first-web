var express = require('express');
var router = express.Router();
var Product = require('../models/products');
var csrf = require('csurf');
var csrfProtection = csrf();

router.use(csrfProtection);

router.get('/', function(req,res,next){
  var products = Product.find(function(err, docs){
    if (err) throw err;
    res.render('shop/index',{title: 'Shoes Shop', products: docs});
  });
});
router.get('/user/signin', function(req,res,next){
  res.render('user/signin',{csrfToken: req.csrfToken()});
});
module.exports = router;
