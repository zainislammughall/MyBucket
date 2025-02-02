import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // true for port 465, false for other ports
  auth: {
    user: "themybucketproject@gmail.com",
    pass: "bvhfxavsorwtpjor",
  },
});

export const sendVerificationEmail = async (receiver, verificationToken) => {
  const info = await transporter.sendMail({
    from: "themybucketproject@gmail.com", // sender address
    to: receiver, // list of receivers
    subject: "Register", // Subject line
    text: "Hi new user of my bucket. this is your verification code.", // plain text body
    html: `<b>${verificationToken} this is your verification code.</b>`, // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
};

export const sendPasswordResetEmail = async (email, resetPasswordURL) => {
  const info = await transporter.sendMail({
    from: "themybucketproject@gmail.com", // sender address
    to: email, // list of receivers
    subject: "Reset Password", // Subject line
    text: "Hi new user of my bucket. this is your verification code.", // plain text body
    html: `<b>click <a href="${resetPasswordURL}" >here</a> this is your reset password link.</b>`, // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
};
