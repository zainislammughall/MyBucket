import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
name: {
    type: String,
    required: true,
 },
 email: {
    type: String,
    required: true,
    unique: true
 },
password: {
    type: String,
    required: true,
},
isVerified: {
    type: String,
    default: false
},
restPasswordToken: String,
restPasswordExpireAt: Date,
verificationToken: String,
verificationTokenExpireAt: Date

})

export const User = mongoose.model("User", userSchema);