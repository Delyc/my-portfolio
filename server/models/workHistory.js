import mongoose from "mongoose";
const workHistorySchema = new mongoose.Schema({
    company: {
        type: String,
        required: true
    },
    position: {
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
    description: {
        type: String,
        required: true,
    },

},
{ timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
)
export const workHistory = mongoose.model("workHistory", workHistorySchema);