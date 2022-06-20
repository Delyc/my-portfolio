import mongoose from 'mongoose';
const testimonySchema = new mongoose.Schema({
    message:{
        type: String,
        required: true,
    },
    profile:{
        type: String, 
    },
    name:{
        type: String,
        required: true,
    },
    position:{
        type: String,
        required: true,
    }
},
{ timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
)

export const testimony = mongoose.model("testimony", testimonySchema);