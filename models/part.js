import mongoose from "mongoose";

const partSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      enum: ["hair", "head", "body", "legs"],
      required: true,
    },
    code: { type: String, required: true },    
    name: { type: String, required: true },   
    file: { type: String, required: true },   
  },
  { versionKey: false }
);

export default mongoose.model("Part", partSchema);

