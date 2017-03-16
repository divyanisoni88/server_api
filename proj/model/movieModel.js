var mongoose=require('mongoose');
var Schema=mongoose.Schema;

// var movieModel1=new Schema({
// 	title:String,
// 	genere:String,
// 	rating:Number,
// 	isReleased:{type:Boolean,default:true},
// 	abs:String

// });

var schemaName_w = new Schema({
    workflow_name : {type:String,index:{unique:true},required:true},
        downloads : {type:Number,required:true},
    tags:{type:[String],required:true}
}, {
    collection: 'workflows'
});

module.exports=mongoose.model("workflow",schemaName_w,"workflow");