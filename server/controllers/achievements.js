import mongoose from "mongoose";
const Mongoose = mongoose;
import { achievement } from "../models/achievements.js";

export const addEducation = async (req, res) => {
    let achieve = req.body;
    if(req.file){
      achieve.banner = req.file.path;
  } 
    
    const newAchievement = await achievement.create(educ);
    res.status(201).json({
        success: true,
        data: {
          newAchievement,
            message:"achievement added successfully"
        }
    })

}


export const getAchievements = async(req,res)=> {
    const achieve= await achievement.find()
    return res.status(200).json({
        success:true,
        data:achieve
    })
}


export const updateAchieve = async(req, res) =>{
    const id = req.params.id
    const achieve = await achievement.findById(id)
    if(!achieve){
        return res.status(404).json({
            success:false,
            data:{
                message:"achievement not found"
            },
        })
    }

    const updateAchieve = await achievement.findByIdAndUpdate(id,req.body, {
        new: true,
    })
    return res.status(200).json({
        success:true,
        data:{
          updateAchieve,
            message:"achievement updated successfully"
        }
    })
}

export const deleteAchieve = async(req, res) =>{
    const id = req.params.id
    const achieve = await achievement.findById(id)
    if(!achieve){
        return res.status(404).json({
            success:false,
            data:{
                message:"achievement not found"
            },
        })
    }

    await achievement.findByIdAndDelete(id)
    return res.status(200).json({
        success:true,
        data:{
            message:"achievement deleted successfully"
        }
    })
}


