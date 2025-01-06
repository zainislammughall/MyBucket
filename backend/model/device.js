import mongoose from "mongoose";

const deviceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  userEmail: {
    type: String,
    required: true,
    unique: true,
  },

  isRegister: {
    type: String,
    default: false,
  },

  isLock: {
    type: String,
    default: false,
  },

  location: {
    type: String,
  },
});

export const Device = mongoose.model("Device", deviceSchema);
