import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
    {
        userId: {
            type: String,
            required: true,
        },
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        }, 
        location: String, 
        description: String, 
        userPicturePath: String, 
        picturePath: String, 
        likes: {
            type: Map,
            of: Boolean,
        }, 
        comments: {
            type: Array, 
            default: []
        }

    },{timestamps: true}
)

/* mongoose.mode -> method provided by the Mongoose library that allows you to create a model for a specific MongoDB collection. */

const Post = mongoose.model("Post", postSchema);
export default Post;