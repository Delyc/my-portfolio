import mongoose from 'mongoose';
const testimonySchema = new mongoose.Schema({
    message:{
        type: String,
        required: true,
    },
    banner:{
        type: String, 
        default: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWo3luud5KPZknLR5zdUUwzvYBztWgTxrkbA&usqp=CAU'
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