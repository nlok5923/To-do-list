//jshint esversion:6

const express =require("express");
const bodyParser = require("body-parser");
const date = require(__dirname+"/date.js");
const app = express();
var items =[];
var workitems=[];
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/",function(req,res){

    var today=new Date();
    var currentDay = today.getDay();
    

// switch(currentDay)
// {
//     case 0:
//         day="sunday";
//         break;
//         case 1:
//             day="monday";
//             break;
//             case 2:
//                 day="tuesday";
//                 break;
//                 case 3:
//                     day="wednesday";
//                     break;
//                     case 4:
//                         day="thruesday";
//                         break;
//     default:
//         console.log("error current day = "+ currentDay);
// }

    // if(today.getDay() === 6||today.getDay()===0)
    // {
    //     day = "weekend";
     
    // }
    // else{
    //     day="weekday";
    //     // we will use ejs for templating
    //     // res.write("<h1>go and work</h1>");
    //     // res.write("<h1>go and work</h1>");
    //     // res.write("<h1>go and work</h1>");
    //     // res.write("<h1>go and work</h1>");
    //     // res.write("<h1>go and work</h1>");
    //     // res.send();
        
    //     // use res.write to send message in one go

    // }
    let day = date();
    res.render("list",{listtitle:day,newListItem:items});


});
app.post("/",function(req,res)
{
    var item =req.body.newItem;
    if(req.body.list=="work")
    {
        workitems.push(item);
        res.redirect("/work");
    }
    else{
        items.push(item);
        res.redirect("/");

    }
    
  
  
});
app.get("/work",function(req,res)
{
    res.render("list",{listtitle:"work list",newListItem:workitems})
})
app.post("/work",function(req,res)
{
    let item = req.body.newItem;
    workitems.push(item);
    res.redirect("/work");
})
app.get("/about",function(req,res)
{
    res.render("about");
})
app.listen(3000, function()
{
    console.log("serevr is running on port 3000");
});
