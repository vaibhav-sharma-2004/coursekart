const {Router}=require("express")
const userRouter=Router();

// route for user signup
userRouter.post("/signup",function(req,res){

    res.json({
        message:"signup end point"
    })
})

// route for user sign in
userRouter.post("/signin",function(req,res){

    res.json({
        message:"signin end point"
    })
})


// route to see all purchased courses by user
userRouter.get("/purchases",function(req,res){
    
    res.json({
        message:"purchase end point"
    })
})

module.exports={
    userRouter:userRouter
}