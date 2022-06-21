import mongoose from "mongoose";
const Mongoose = mongoose;
import { skills } from "../models/skills.js";

export const addSkill = async (req, res) => {
    let skill = req.body;
    
    const newSkill = await skills.create(skill);
    res.status(201).json({
        success: true,
        data: {
            newSkill,
            message:"skill added successfully"
        }
    })

}



export const getAllSkills = async(req,res)=> {
    const skill= await skills.find()
    return res.status(200).json({
        success:true,
        data:skill
    })
}



export const updateSkill = async(req, res) =>{
    const id = req.params.id
    const skill = await skills.findById(id)
    if(!skill){
        return res.status(404).json({
            success:false,
            data:{
                message:"Project not found"
            },
        })
    }

    const updateSkill = await skills.findByIdAndUpdate(id,req.body, {
        new: true,
    })
    return res.status(200).json({
        success:true,
        data:{
            updateSkill,
            message:"skill updated successfully"
        }
    })
}

export const deleteSkill = async(req, res) =>{
    const id = req.params.id
    const skill = await skills.findById(id)
    if(!skill){
        return res.status(404).json({
            success:false,
            data:{
                message:"skill not found"
            },
        })
    }

    await skills.findByIdAndDelete(id)
    return res.status(200).json({
        success:true,
        data:{
            message:"skill deleted successfully"
        }
    })
}


