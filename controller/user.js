import sendMail from "../email/emai.js";
import User from "../model/User.js";

export const createUser = async(req,res)=> {
    try {
        debugger
        const userDetails = new User(req.body);
        await userDetails.save();
        sendMail(req.body);
        res.status(200).json("Data stored successfully");
    } catch(err) {
        console.log(err);
        res.status(500).json("Email is already present");
    }
}