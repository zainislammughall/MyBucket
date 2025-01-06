import { User } from "../model/user.js";
import bycrypt from "bcryptjs";
import { generateVerificationToken } from "../utils/genrateVerficationToken.js";
import { generateJWTToken } from "../utils/generateJWTToken.js";
import { sendVerificationEmail } from "../nodemailer/mailsender.js";
import { sendPasswordResetEmail } from "../nodemailer/mailsender.js";
import { randomBytes } from "crypto";

//singUp
//Author: Zain Islam
export const signup = async (req, res) => {
  const { name, email, password, role } = req.body;
  try {
    if (!name || !email || !password || !role) {
      return res.status(400).json({ message: "All fields are required." });
    }
    const userAlreadyExists = await User.findOne({ email });
    if (userAlreadyExists) {
      return res.status(400).json({ message: "User already exist." });
    }

    const hashedPassword = await bycrypt.hash(password, 10);
    const verificationToken = generateVerificationToken();

    const user = new User({
      name,
      email,
      password: hashedPassword,
      verificationToken: verificationToken,
      verificationTokenExpireAt: Date.now() + 24 * 60 * 60 * 1000, // 24 hr
    });

    await user.save();

    generateJWTToken(res, user._id);
    sendVerificationEmail(user.email, verificationToken);

    res.status(201).json({
      success: true,
      message: "User created successfully",
      user: {
        ...user._doc,
        password: undefined,
      },
    });
  } catch (error) {
    console.log("error signing up", error);
    res.status(400).json({ success: false, message: error.message });
  }
};

//login
//Author: Zain Islam
export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid email adress." });
    }
    const isPasswordValid = await bycrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid password." });
    }
    const isEmailVerified = user.isVerified;
    if (!isEmailVerified) {
      return res
        .status(400)
        .json({ success: false, message: "User email is not verified." });
    }

    generateJWTToken(res, user._id);
    return res
      .status(200)
      .json({ success: true, message: "Login successfully." });
  } catch (error) {
    console.log("error logging in", error);
    return res
      .status(400)
      .json({ success: false, message: "error logging in" });
  }
};

//logout
//Author: Zain Islam
export const logout = (req, res) => {
  res.clearCookie("token");
  return res
    .status(200)
    .json({ success: true, message: "Logout successfully." });
};

//email verification
//Author: Zain Islam
export const verifyEmail = async (req, res) => {
  const { code } = req.body;
  try {
    const user = await User.findOne({
      verificationToken: code,
      verificationTokenExpireAt: { $gt: Date.now() },
    });
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Invalid or expired verification code.",
      });
    }

    user.isVerified = true;
    user.verificationToken = undefined;
    user.verificationTokenExpireAt = undefined;

    await user.save();
    return res
      .status(200)
      .json({ success: true, message: "Email verified successfully." });
  } catch (error) {
    console.log("error verifing email", error);
    return res.status(400).json({
      success: false,
      message: `Verification failed ${error.message}`,
    });
  }
};

//forgot password
//Author: Zain Islam
export const forgotPassword = async (req, res) => {
  const email = req.body;
  try {
    const user = await User.findOne(email);
    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid email." });
    }

    const resetPasswordToken = randomBytes(32).toString("hex");
    const resetPasswordExpireAt = Date.now() + 1 * 60 * 60 * 1000; //1 hour

    (user.restPasswordToken = resetPasswordToken),
      (user.restPasswordExpireAt = resetPasswordExpireAt);

    await user.save();

    await sendPasswordResetEmail(
      user.email,
      `${process.env.CLIENT_URL}/reset-password/${resetPasswordToken}`
    );

    return res.status(200).json({
      success: true,
      message: "Password reset email sent successfully.",
    });
  } catch (error) {
    console.log("forgot password failed", error.message);
    return es.status(400).json({
      success: false,
      message: `forgot password failed. ${error.message}`,
    });
  }
};

//reset passowrd
//Author: Zain Islam
export const resetPassword = async (req, res) => {
  const { token } = req.params;
  const { password } = req.body;

  try {
    const user = await User.findOne({
      restPasswordToken: token,
      restPasswordExpireAt: { $gt: Date.now() },
    });

    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid or expired reset token." });
    }
    const hashedPassword = await bycrypt.hash(password, 10);
    user.password = hashedPassword;
    user.resetPasswordToken = undefined;
    user.restPasswordExpireAt = undefined;
    await user.save();
    return res
      .status(200)
      .json({ success: true, message: "Password reset successfully!" });
  } catch (error) {
    console.log("password reset failed", error.message);
    return res
      .status(400)
      .json({ success: false, message: "password reset failed." });
  }
};

//check auth
//Author: Zain Islam
export const checkAuth = async (req, res) => {
  try {
    const user = await User.findById(req.userId);
    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "user not found" });
    }

    return res
      .status(200)
      .json({ success: true, user: { ...user._doc, password: undefined } });
  } catch (error) {
    console.log("auth failed", error.message);
    return res
      .status(400)
      .json({ success: false, message: `auth failed: ${error.message}` });
  }
};
