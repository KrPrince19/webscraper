
import mongoose from "mongoose"

const StorySchema = new mongoose.Schema({
    title:String,

    url:String,

    points:Number,

    author:String,

    postedAt: String
},
{
    timestamps:true,
}

);

export default mongoose.model("Story", StorySchema);