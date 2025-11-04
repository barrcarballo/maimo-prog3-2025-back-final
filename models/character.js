import mongoose from "mongoose";

const characterSchema = new mongoose.Schema({
  name: { type: String, required: true },
  head: { type: String, required: true },
  eyes: { type: String, required: true },
  mouth: { type: String, required: true },
  body: { type: String, required: true },
  accessory: { type: String }
});

export default mongoose.model("Character", characterSchema);
