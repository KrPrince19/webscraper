import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import authRoutes from "./routes/authRoutes.js"
import scraperRoutes from "./routes/scraperRouetes.js"
import { scrapeStories } from "./controllers/scraperController.js";
import storyRoutes from "./routes/storyRoutes.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

  app.use("/api/auth", authRoutes);
  app.use("/api/scrape", scraperRoutes);
    app.use("/api/stories", storyRoutes);



app.get("/", (req, res) => {
  res.send("API Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, async () => {
  console.log(`Server running on port ${PORT}`);


 await scrapeStories(
    {},
    {
      json: () => {},
      status: () => ({
        json: () => {},
      }),
    }
  );
});