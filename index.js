const express=require("express");
const app=express();

// route for user signup
app.post("/user/signup",function(req,res){

    res.json({
        message:"signup end point"
    })
})

// route for user sign in
app.post("/user/signin",function(req,res){

    res.json({
        message:"signin end point"
    })
})

// route to see all available courses
app.get("/courses",function(req,res){

    res.json({
        message:"courses end point"
    })
})

// route to see all purchased courses by user
app.get("/user/purchases",function(req,res){

    res.json({
        message:"purchase end point"
    })
})

// route to purchase a course
app.post("user/courses/purchase",function(req,res){

    res.json({
        message:"end point"
    })
})