import express from "express";
import { connectToDatabase } from "./database/connectionToDatabase.js";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.route.js";
import deviceRoutes from "./routes/device.route.js";
import cookieParser from "cookie-parser";
import cors from "cors";

dotenv.config();

const app = express();
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json()); // to parse the data
app.use(cookieParser()); // to parse the cookie
app.get("/", (req, res) => {
  res.send("Hello there!!!");
});

connectToDatabase();

app.use("/api/auth", authRoutes);
app.use("/api/device", deviceRoutes);

app.listen(3000, () => {
  console.log("Server is runing on port 3000.");
});

//DB conn string: mongodb+srv://zainislammughall:<db_password>@mybucketcluster.ug4zu.mongodb.net/?retryWrites=true&w=majority&appName=MyBucketCluster
