import mongoose from "mongoose";
import { testimony } from "../models/testimony.js";

export const addTestimony = async (req, res) => {
    let obj = req.body;
    if(req.file){
        obj.banner = req.file.path;
    } 
    const newTestimony = await testimony.create(obj);
    res.status(201).json({
        success: true,
        data: {
            newTestimony,
            message:"Work testimony added successfully"
        }
    })

}


export const getTestimony = async(req,res)=> {
    const testimonies= await testimony.find()
    return res.status(200).json({
        success:true,
        data:testimonies
    })
}




