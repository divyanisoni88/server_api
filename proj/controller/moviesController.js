var Movie=require('./../model/movieModel');



// var get=function(req,res){
// 	tag = req.query.search_item;
// 	console.log(tag+"klklklk");
// 	var count=0;
	
//  	Movie.find(function(err,movies){
//      if(err){
// 	res.status(500);
// 	res.send("Internal errr");


// }else{
// 	var arr=[];
// 	res.status(200);
// 	//res.send(movies);
// 	var c=0;
	
// 	if(tag.length==1)
// 	{
// 		movies.map((a,e)=>{
// 		if(a.workflow_name===tag || a.downloads==tag)
// 			{
// 			console.log("in name");
// 			var co=0;
			
// 			c++;
// 			for(var i=0;i<arr.length;i++)
// 			{
// 				if(arr[i]===a)
// 				{
// 					co++;
// 				}
// 			}
// 			if(count==0)
// 			arr.push(a);
// 		    co=0;
// 			}
// 			else
// 			{
// 				var tags_arr=a.tags;
// 				for(var i=0;i<tags_arr.length;i++)
// 				{
// 					if(tags_arr[i]===tag)
// 					{
// 						console.log("in name");
// 			var co=0;
			
// 			c++;
// 			for(var i=0;i<arr.length;i++)
// 			{
// 				if(arr[i]===a)
// 				{
// 					co++;
// 				}
// 			}
// 			if(count==0)
// 			arr.push(a);
// 		    co=0;
// 					}
// 				}
// 			}
// 	});
// 	}
// else{

// 	movies.map((a,e)=>{


// 		for(var i=0;i<tag.lngth;i++)
// 		{
// 			if(a.workflow_name===tag[0] || a.downloads==tag[0])
// 			{
// 				console.log("in name");
// 			var co=0;
			
// 			c++;
// 			for(var i=0;i<arr.length;i++)
// 			{
// 				if(arr[i]===a)
// 				{
// 					co++;
// 				}
// 			}
// 			if(count==0)
// 			arr.push(a);
// 		    co=0;
// 			}
// 		}



//         var tags_arr=a.tags;
//       //  console.log(tags_arr);
//         for(var i=0;i<tags_arr.length;i++)
//         {
//           for(var j=0;j<tag.length;j++)
//           {
//             if (tags_arr[i] === tag[j])
//              {
//             count++;//console.log("yuyuyuyuy  "+count);
//           //  alert(count+"     "+chip.length);
//             break;
//              }
//           }
//         }

//         if(count==tag.length)
//         {
// console.log("array matched")
//          var co=0;
			
// 			c++;
// 			for(var i=0;i<arr.length;i++)
// 			{
// 				if(arr[i]===a)
// 				{
// 					co++;
// 				}
// 			}
// 			if(co==0){
// 			arr.push(a);
// 			console.log("in  and");
// 		}
// 		    co=0;
         
//         }
//         else
//         {
//           for(var i=0;i<tag.length;i++)
//           {//alert("choippp  "+  i  +"  "+chip[i]);
//             for(var j=0;j<tags_arr.length;j++)
//             {//alert("tags    "+j+"    "+tags_arr[i]);
//               if(tag[i]===tags_arr[j])
//               {
//                 var m1=0;
//                 for(var m=0;m<arr.length;m++)
//                 {
//                   if(tag[i]===arr.length[m])
//                   {
//                     m1++;
//                     break;
//                   }
//                 }
//                 if(m1==0)
//                 {
//                   var co=0;
			
// 			c++;
// 			for(var i=0;i<arr.length;i++)
// 			{
// 				if(arr[i]===a)
// 				{
// 					co++;
// 				}
// 			}
// 			if(co==0){
// 			arr.push(a);
// 			console.log("in  or");
// 		}
// 		    co=0;
                  
//                 }
//               }
//             }
//           }
//   }        count=0;
     

		
// 	})
// }
// 	if(c===0)
// 		{
// 			res.send("np workflow found");
// 		}
// 	res.send(arr);


// }
// })
// //res.send("klk");
// }


var get=function(req,res){
	var tag=req.query.search_item;
	console.log("tagsss   "+tag);
 	Movie.find({tags:{$all:tag}},function(err,movies){
if(err){
	res.status(500);
	res.send("Internal errr");
}
else
{
	// if(tag.length>0)
	// console.log(Movie.find({"workflow_name":tag[0]}));
	//res.json(movies);
	console.log("result of server ");
	console.log(movies);
	res.json(movies);

}
})
}




var add=function(req,res){
   var movie=new Movie(req.body);
   movie.save(function(err){
   	if(err){
   		res.status(500);
   		res.send("Failed");
   	}
   	else
   	{
   		res.status(201);
   		res.send(movie);
   	}
   })





}

// module.exports=get;
// module.exports=add;
  module.exports={
  	add:add,
  	get:get
  }