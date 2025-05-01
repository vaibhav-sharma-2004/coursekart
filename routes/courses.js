const {Router}= require("express")
const {userMiddleware}=require("../middleware/user");
const { purchaseModel,courseModel } = require("../db");
const coursesRouter=Router();

// route to see all available courses
coursesRouter.get("/preview",async function(req,res){

    const courses= await courseModel.find({});
    console.log(courses)

    res.json({
        message:"preveiw end point"
    })
})
// route to purchase a course
coursesRouter.post("/purchase",userMiddleware,async function(req,res){

    const {courseId}=req.body;
    const userId=req.user.id;
    console.log(courseId,userId)

    await purchaseModel.create({
        courseId:courseId,
        userId:userId
    })
    res.json({
        message:"course purchase end point"
    })
})

module.exports={
    coursesRouter:coursesRouter
}