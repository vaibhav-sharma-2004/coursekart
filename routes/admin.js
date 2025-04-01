const {Router}=require("express")
const adminRouter=Router();

// route for admin signup
adminRouter.post("/signup",function(req,res){

    res.json({
        message:"signup end point"
    })
})

// route for admin sign in
adminRouter.post("/signin",function(req,res){

    res.json({
        message:"signin end point"
    })
})

// route for admin to post course
adminRouter.post("/courses",function(req,res){

    res.json({
        message:"preview end point"
    })
})

// route for admin to update course
adminRouter.put("/signin",function(req,res){

    res.json({
        message:"update end point"
    })
})

// route for admin to see courses
adminRouter.get("/courses",function(req,res){

    res.json({
        message:"signin end point"
    })
})

module.exports={
    adminRouter:adminRouter
}