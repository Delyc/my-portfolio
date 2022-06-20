import mongoose from "mongoose";
const achievementSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
  },
},
{ timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

export const achievement = mongoose.model("achievement", achievementSchema);