import mongoose from "mongoose";
const educationSchema = new mongoose.Schema({
    school: {
        type: String,
        required: true,
    },
    startDate:{
        type: Date,
        required: true,
    },
    endDate:{
        type: Date,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    relevantCourse:{
        type: String,
        required: true,
    }

},
{ timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
)

export const education = mongoose.model("education", educationSchema);