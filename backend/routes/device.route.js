import express from "express";
import { addDevice } from "../controllers/device-controler.js";

const router = express.Router();

router.post("/addDevice", addDevice);

export default router;
