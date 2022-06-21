import mongoose from "mongoose";
const Mongoose = mongoose;
import { project } from "../models/project.js";

export const addProject = async (req, res) => {
    let proj = req.body;
    if(req.file){
        proj.banner = req.file.path;
    } 
    
    const newProject = await project.create(proj);
    res.status(201).json({
        success: true,
        data: {
            newProject,
            message:"project added successfully"
        }
    })

}



export const getAllProjects = async(req,res)=> {
    const proj= await project.find()
    return res.status(200).json({
        success:true,
        data:proj
    })
}


export const getProjectById = async(req,res)=>{
    if(!req.params.id || !Mongoose.isValidObjectId(req.params.id)){
        return res.status(400).json({
            success:false,
            data:{
                message:"Invalid ID"
            }
        })
    }

    const id = req.params.id;
    const proj = await project.findById(id);
    if(!proj){
        return res.status(404).json({
            success:false,
            data:{
                message: "project not found"
            }
        })
    }
    else{
        res.status(200).json({
            success:true,
            data:proj
        })

    }
}


export const updateProject = async(req, res) =>{
    const id = req.params.id
    const proj = await project.findById(id)
    if(!proj){
        return res.status(404).json({
            success:false,
            data:{
                message:"Project not found"
            },
        })
    }

    const updateProj = await project.findByIdAndUpdate(id,req.body, {
        new: true,
    })
    return res.status(200).json({
        success:true,
        data:{
            updateProj,
            message:"proj updated successfully"
        }
    })
}

export const deleteProject = async(req, res) =>{
    const id = req.params.id
    const proj = await project.findById(id)
    if(!proj){
        return res.status(404).json({
            success:false,
            data:{
                message:"proj not found"
            },
        })
    }

    await project.findByIdAndDelete(id)
    return res.status(200).json({
        success:true,
        data:{
            message:"project deleted successfully"
        }
    })
}


