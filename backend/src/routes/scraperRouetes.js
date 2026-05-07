import express from "express";
import { scrapeStories } from "../controllers/scraperController.js";

const router = express.Router();

router.post("/", scrapeStories);

export default router;