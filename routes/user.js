const {Router}=require("express")
const userModel=require("../db")
const userRouter=Router();
const jwt=require("jsonwebtoken")
const JWT_USER_PASSWORD="1212121"

// route for user signup
userRouter.post("/signup",async function(req,res){
    
    const { email, password, firstName, lastName}=req.body
        
        await adminModel.create({
            email: email,
            password: password,
            firstName: firstName,
            lastName: lastName
        })
    
    res.json({
        message:"signup end point"
    })
})

// route for user sign in
userRouter.post("/signin",function(req,res){

    const { email,password }= req.body

    const user= userModel.findOne({
        email:email,
        password:password
    })

    if(user){

        const token=jwt.sign({
            id: user._id
        },JWT_USER_PASSWORD);

        res.json({
            token:token
        })
    }



    else{
        res.status(403).json({
            message:"Incorrect credentials"
        })
    }
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