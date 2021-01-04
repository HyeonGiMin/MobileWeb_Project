var express = require('express');
var router = express.Router();



var UserRouter=require('./users');
var MapRouter=require('./maps');
var ScoreRouter=require('./socre');


router.use('/maps',MapRouter);
router.use('/user',UserRouter)
router.use('/score',ScoreRouter);



module.exports = router;
