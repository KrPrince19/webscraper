import axios from "axios";
import * as  cheerio from "cheerio";
import Story from "../models/Story.js";

export const scrapeStories = async (req, res) =>{
    try {
        const {data} = await axios.get("https://news.ycombinator.com");

        const $ = cheerio.load(data);

        const stories = [];

        $(".athing").slice(0, 10).each((index, element) => {

            const title = $(element).find(".titleline a").first().text().trim();

            const url = $(element).find(".titleline a").first().attr("href");

            const subtext = $(element).next();
            
            const points =
            parseInt(subtext.find(".score").text()) || 0;

            const author = subtext.find(".hnuser").text() || "Unknown";
            
            const postedAt = subtext.find(".age").text() || "Unknown";

            stories.push({
                title,
                url,
                points,
                author,
                postedAt
            })

        });

        await Story.deleteMany();

        await Story.insertMany(stories);

        res.json({
            message: "Stories scraped and saved successfully",
            total: stories.length,
        });
    }
        catch (error){
            res.status(500).json({
                message:error.message,
            });
        }
    };
