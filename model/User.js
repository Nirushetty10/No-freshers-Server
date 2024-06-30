import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name : {type : String, required : true},
    email : {type : String, required : true, unique : true},
    phoneNumber : {type : String, required : true},
    plan : {type : String, required : true},
}, {timestamps: true})

export default mongoose.model("User", userSchema);