import mongoose from "mongoose";
const educationSchema = new mongoose.Schema({
    school: {
        type: String,
        required: true,
    },
    startDate:{
        type: Date,  //date format: YYYY-MM-DD
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
        type: [],
        required: true,
    }

},
{ timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
)

export const education = mongoose.model("education", educationSchema);