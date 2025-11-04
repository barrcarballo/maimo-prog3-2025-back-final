import express from "express";
import Part from "../models/part.js";

const router = express.Router();

// GET all parts
router.get("/", async (req, res) => {
  const parts = await Part.find();
  res.json(parts);
});

// GET parts by type (para filtrar por cabeza, ojos, etc.)
router.get("/:type", async (req, res) => {
  const parts = await Part.find({ type: req.params.type });
  res.json(parts);
});

// POST new part
router.post("/", async (req, res) => {
  const newPart = new Part(req.body);
  const saved = await newPart.save();
  res.status(201).json(saved);
});

export default router;
