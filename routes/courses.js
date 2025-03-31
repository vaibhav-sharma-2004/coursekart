const {Router}= require("express")
const coursesRouter=Router();

// route to see all available courses
coursesRouter.get("/preview",function(req,res){

    res.json({
        message:"courses end point"
    })
})
// route to purchase a course
coursesRouter.post("/purchase",function(req,res){

    res.json({
        message:"course purchase end point"
    })
})

module.exports={
    coursesRouter:coursesRouter
}