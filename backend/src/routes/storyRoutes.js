import express from "express";

import {
  getStories,
  getSingleStory,
  toggleBookmark,
} from "../controllers/storyController.js";

import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", getStories);

router.get("/:id", getSingleStory);

router.post("/:id/bookmark", authMiddleware, toggleBookmark);

export default router;