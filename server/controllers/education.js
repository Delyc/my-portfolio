import mongoose from "mongoose";
const Mongoose = mongoose;
import { education } from "../models/education.js";

export const addEducation = async (req, res) => {
    let educ = req.body;
    
    const newEduc = await education.create(educ);
    res.status(201).json({
        success: true,
        data: {
            newEduc,
            message:"education added successfully"
        }
    })

}



export const getEducation = async(req,res)=> {
    const educ= await education.find()
    return res.status(200).json({
        success:true,
        data:educ
    })
}



export const updateEduc = async(req, res) =>{
    const id = req.params.id
    const educ = await education.findById(id)
    if(!educ){
        return res.status(404).json({
            success:false,
            data:{
                message:"education not found"
            },
        })
    }

    const updateEduc = await education.findByIdAndUpdate(id,req.body, {
        new: true,
    })
    return res.status(200).json({
        success:true,
        data:{
            updateEduc,
            message:"educ updated successfully"
        }
    })
}

export const deleteEduc = async(req, res) =>{
    const id = req.params.id
    const educ = await education.findById(id)
    if(!educ){
        return res.status(404).json({
            success:false,
            data:{
                message:"education not found"
            },
        })
    }

    await education.findByIdAndDelete(id)
    return res.status(200).json({
        success:true,
        data:{
            message:"education deleted successfully"
        }
    })
}


