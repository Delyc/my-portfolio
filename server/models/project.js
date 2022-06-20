import mongoose from "mongoose";
const projectSchema = new mongoose.Schema({
    github:{
        type: String,
        required: true,
    },
    liveLink:{
        type: String,
        required: true,
    },
    banner:{
        type: String,
        required: true,
    },
    title:{
        type: String,
        required: true,
    },
    hook:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    }
},
{ timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
)

export const project = mongoose.model("project", projectSchema);