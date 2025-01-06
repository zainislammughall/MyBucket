import { Device } from "../model/device.js";

//Add Device
//Author: Zain Islam
export const addDevice = async (req, res) => {
  const { name, userEmail } = req.body;
  try {
    if (!name || !userEmail) {
      return res.status(400).json({ message: "All fields are required." });
    }
    const deviceAlreadyExists = await Device.findOne({ userEmail });
    if (deviceAlreadyExists) {
      return res.status(400).json({ message: "Device already exist." });
    }

    const device = new Device({
      name,
      userEmail,
    });

    await device.save();

    res.status(200).json({
      success: true,
      message: "Device created successfully",
      device: {
        ...device._doc,
      },
    });
  } catch (error) {
    console.log("error adding device", error);
    res.status(400).json({ success: false, message: error.message });
  }
};
