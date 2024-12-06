import { User } from "../model/user.js";
import bycrypt from "bcryptjs"
import { generateVerificationToken } from "../utils/genrateVerficationToken.js";
import { generateJWTToken } from "../utils/generateJWTToken.js";
import { sendVerificationEmail } from "../resend/email.js";

export const signup = async (req, res) => {
    const{ name, email, password } = req.body;
    try{
        if( !name || !email || !password) {
            return res.status(400).json({ message: "All fields are required."});
        }
        const userAlreadyExists = await User.findOne({email});
        if(userAlreadyExists) {
            return res.status(400).json({ message: "User already exist."});
        }

        const hashedPassword = await bycrypt.hash(password, 10);
        const verificationToken = generateVerificationToken();

        const user = new User({
            name,
            email,
            password: hashedPassword,
            verificationToken: verificationToken,
            verificationTokenExpireAt: Date.now() + 24 * 60 *60 * 1000 // 24 hr
        })

        await user.save();

        generateJWTToken(res, user._id);
        sendVerificationEmail(user.email, verificationToken);

        res.status(201).json({
            success: true,
            message: "User created successfully",
            user: {
                ...user._doc,
                password: undefined
            }
        })

    } catch (error)
    {
        res.status(400).json({ success: false, message: error.message });

    }
   
}

export const login = (req, res) => {

    res.send("login Route");
}

export const logout = (req, res) => {

    res.send("logout Route");
}