import { resend } from "./config.js";


export const sendVerificationEmail = async (email, verificationToken) => {
    try {
        
        const { data, error } = await resend.emails.send({
              from: "Acme <onboarding@resend.dev>",
              to: [email],
              subject: "Verify your email",
              html: `<strong>Hi there! plese verify your email address with this token ${verificationToken} Thanks.</strong>`,
            })
          
    } catch (error) {
        console.log(`Error send the email ${error}`);
        throw new Error("Error sending the email.");

    }
}