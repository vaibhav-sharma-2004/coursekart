const {Router}=require("express")
const {adminModel}=require("../db");
const adminRouter=Router();
const jwt =require("jsonwebtoken");
const { adminMiddleware } = require("../middleware/admin");
const JWT_ADMIN_PASSWORD="ADMIN1212"

// route for admin signup
adminRouter.post("/signup",async function(req,res){

    const {email,password, firstName, lastName}=req.body
    
    await adminModel.create({
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName
    })

    res.json({
        message:"signup success"
    })
})

// route for admin sign in
adminRouter.post("/signin",async function(req,res){

    const { email,password }= req.body;
    
    //
    const admin= await adminModel.findOne({
        email:email,
        password:password
    });

    if(admin){

        const token=jwt.sign({
            id: admin._id
        },JWT_ADMIN_PASSWORD);

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

// route for admin to update course
adminRouter.put("/courses",function(req,res){
    
    res.json({
        message:"preview end point"
    })
})

// route for admin to post course
adminRouter.post("/courses",adminMiddleware,async function(req,res){
    
    const adminId=req.adminId;

    const {title,description,price,imageUrl}=req.body

    const course=await courseModel.create({
        title:title,
        description:description,
        price:price,
        imageUrl:imageUrl,
        creator:adminId
    })

    res.json({
        message:"course created successfully",
        courseId:course._id

    })
})

// route for admin to see courses
adminRouter.get("/courses/bulk",function(req,res){

    res.json({
        message:"signin end point"
    })
})

module.exports={
    adminRouter:adminRouter
}