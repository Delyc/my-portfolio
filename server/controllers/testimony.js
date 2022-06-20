import mongoose, { Mongoose } from "mongoose";
const Mongoose = mongoose.Schema;
import { testimony } from "../models/testimony";

export const addTestimony = async (req, res) => {
    let obj = req.body;
    const newTestimony = await testimony.create(obj);
    res.status(201).json({
        success: true,
        data: {
            newTestimony,
            message:"Work testimony added successfully"
        }
    })

}


export const getAllTestimonies = async(req,res)=> {
    const testimonies= await testimony.find()
    return res.status(200).json({
        success:true,
        data:testimonies
    })
}




