const {Schema, default: mongoose}=require("mongoose")

mongoose.connect("mongodb+srv://admin:94UeW2cQ6OnRQKrK@cluster0.pftveuj.mongodb.net/coursekart")
console.log("connected");
const ObjectId=mongoose.Types.ObjectId


const userSchema= new Schema({
    email:{type:String, unique:true},
    password: String,
    firstName:String,
    lastName:String,

});

const adminSchema=new Schema({
    email:{type:String, unique:true},
    password: String,
    firstName:String,
    lastName:String,
});

const courseSchema=new Schema({
    title:String,
    description:String,
    price:Number,
    imageUrl:String,
    creator:ObjectId
});

const purchaseSchema=new Schema({
    userId:ObjectId,
    courseId:ObjectId
});

const userModel=mongoose.model("user",userSchema)
const adminModel=mongoose.model("admin",adminSchema)
const courseModel=mongoose.model("course",courseSchema)
const purchaseModel=mongoose.model("purchase",purchaseSchema)
