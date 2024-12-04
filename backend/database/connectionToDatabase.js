import mongoose from "mongoose";

export const connectToDatabase = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB connected: %d", connection.connection.host);

    } catch (error){
        console.log('Error connection to the Mongo DB: %d', error.message);
    }
}