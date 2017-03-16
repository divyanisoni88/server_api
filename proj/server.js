var express        =         require("express");
var bodyParser     =         require("body-parser");
var app            =         express();
var moviesRouter   =    require('./routes/moviesRouter');

var mongoose=require('mongoose');

var db=mongoose.connect("mongodb://localhost/MoviesDb");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/',function(req,res){
    res.send("opopopopopppopo");
});
// app.post('/login',function(req,res){
//     var user_name=req.body.user;
//     var password=req.body.password;
//     console.log("User name = "+user_name+", password is "+password);
//     res.end("yes");
// });



app.use('/movies',moviesRouter);



app.listen(6007,function(){
    console.log("Started on PORT 6000");
})
