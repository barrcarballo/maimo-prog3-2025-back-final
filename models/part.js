import mongoose from "mongoose";

const partSchema = new mongoose.Schema({
  type: { type: String, required: true }, // ej: "head", "eyes", "body"
  name: { type: String, required: true },
  imageUrl: { type: String, required: true }
});

export default mongoose.model("Part", partSchema);
