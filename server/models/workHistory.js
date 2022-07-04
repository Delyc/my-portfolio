import mongoose from "mongoose";
const workHistorySchema = new mongoose.Schema({
    companyName: {
        type: String,
        required: true
    },
    jobTitle: {
        type: String,
        required: true,
    },
    startDate: {
        type: Date,
        required: true,
    },
    endDate: {
        type: Date,
        required: true,
    },
    jobDescription: {
        type: String,
        required: true,
    },
    jobLocation:{
        type: String,
        required: true,
    },
    technologies:{
        type: String,
        required: true,
    }

},
{ timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
)
export const workHistory = mongoose.model("workHistory", workHistorySchema);