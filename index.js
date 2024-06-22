import express from "express";
const app = express();

const allusers= [

{id:1,username:"siki",age:20},
{id:2,username:"sikander",age:30},
{id:3,username:"shah",age:40},

];

app.get("/",(req,res)=>{
    res.send("Home Page");
})

app.get("/user",(req,res)=>{
    res.send(allusers);
});

app.get("/user/:id",(req,res)=>{
const parsedId = parseInt(req.params.id);
if(isNaN(parsedId)) return res.send("Invalid ID");

const findUsr = allusers.find((usr) => usr.id === parsedId);
if(!findUsr) return res.send("No find user");
res.send(findUsr);
});


app.listen(3000,()=>{console.log("Server running");});