var express=require('express');
var movie=require('../mongo');
var moviesRouter=express.Router();
var movieController=require('./../controller/moviesController');

moviesRouter.route('')
 .get(movieController.get)
 .post(movieController.add);




module.exports=moviesRouter;
