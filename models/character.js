import mongoose from "mongoose";

const characterSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    hair: { type: String, required: true }, 
    head: { type: String, required: true }, 
    body: { type: String, required: true }, 
    legs: { type: String, required: true }, 
  },
  { versionKey: false } // borra el campo __v de mongo 
);

export default mongoose.model("Character", characterSchema);


