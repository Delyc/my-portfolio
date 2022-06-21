import mongoose from "mongoose";
const skillsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    percentage:{
        type: Number,  //date format: YYYY-MM-DD
        required: true,
    },
   

},
{ timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
)

export const skills = mongoose.model("skills", skillsSchema);