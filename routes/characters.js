import express from "express";
import Character from "../models/character.js";

const router = express.Router();

// GET all characters
router.get("/", async (req, res) => {
  const characters = await Character.find();
  res.json(characters);
});

// GET character by ID
router.get("/:id", async (req, res) => {
  const character = await Character.findById(req.params.id);
  res.json(character);
});

// POST create character
router.post("/", async (req, res) => {
  try {
    const newCharacter = new Character(req.body);
    const saved = await newCharacter.save();
    res.status(201).json(saved);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
});


export default router;
