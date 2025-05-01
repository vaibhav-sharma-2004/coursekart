const {Router}=require("express")
const {userModel,purchaseModel} =require("../db");
const { userMiddleware } = require("../middleware/user");
const userRouter=Router();
const {jwt} =require("jsonwebtoken");
const JWT_USER_PASSWORD="1212121"

// route for user signup
userRouter.post("/signup",async function(req,res){
    
    const { email, password, firstName, lastName}=req.body;
    console.log(typeof userModel.create)
        
    await userModel.create({
        email: email,
        password: password,
        firstName: firstName, 
        lastName: lastName
    })
    
    res.json({
        message:"signup success"
    })
})

// route for user sign in
userRouter.post("/signin",async function(req,res){

    const { email,password }= req.body;
    
    //
    const user= await userModel.findOne({
        email:email,
        password:password
    });

    if(user){

        const token=jwt.sign({
            id: user._id
        },JWT_USER_PASSWORD);

        //do cookie logic if using cookie instead of token
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
userRouter.get("/purchases",userMiddleware,async function(req,res){
    
    const userId=req.userId;

    const purchases= await purchaseModel.find({
        userId:userId
    });

    res.json({
        message:"purchase end point"
    })
})

module.exports={
    userRouter:userRouter
}