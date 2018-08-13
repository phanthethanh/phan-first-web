var express = require('express');
var router = express.Router();
var Product = require('../models/products');


/*Home page*/
router.get('/', function(req,res,next){
  var products = Product.find();

  res.render('shop/index',{title: 'Shoes Shop', productList: products});
});

module.exports = router;