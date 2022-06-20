import mongoose from "mongoose";
const interestSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },

},
{ timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
)

export const interest = mongoose.model("interest", interestSchema);