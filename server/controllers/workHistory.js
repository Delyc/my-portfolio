import mongoose, { Mongoose } from "mongoose";
const Mongoose = mongoose;
import { workHistory } from "../models/workHistory";

export const addWorkHistory = async (req, res) => {
    let obj = req.body;
    const newWorkHistory = await workHistory.create(obj);
    res.status(201).json({
        success: true,
        data: {
            newWorkHistory,
            message:"Work History added successfully"
        }
    })

}


export const getWorkHistoryById = async(req,res)=>{
    if(!req.params.id || !Mongoose.isValidObjectId(req.params.id)){
        return res.status(400).json({
            success:false,
            data:{
                message:"Invalid ID"
            }
        })
    }

    const id = req.params.id;
    const workhistory = await workHistory.findById(id);
    if(!workhistory){
        return res.status(404).json({
            success:false,
            data:{
                message: "Work History not found"
            }
        })
    }
    else{
        res.status(200).json({
            success:true,
            data:workhistory
        })

    }
    
}


export const getAllWorkHistory = async(req,res)=> {
    const workhistory= await workHistory.find()
    return res.status(200).json({
        success:true,
        data:workhistory
    })
}


export const updateWorkHistory = async(req, res) =>{
    const id = req.params.id
    const workhistory = await workHistory.findById(id)
    if(!workhistory){
        return res.status(404).json({
            success:false,
            data:{
                message:"Work History not found"
            },
        })
    }

    const updateWorkHistory = await workHistory.findByIdAndUpdate(id,req.body, {
        new: true,
    })
    return res.status(200).json({
        success:true,
        data:{
            updateWorkHistory,
            message:"Work History updated successfully"
        }
    })
}

export const deleteWorkHistory = async(req, res) =>{
    const id = req.params.id
    const workhistory = await workHistory.findById(id)
    if(!workhistory){
        return res.status(404).json({
            success:false,
            data:{
                message:"Work History not found"
            },
        })
    }

    await workHistory.findByIdAndDelete(id)
    return res.status(200).json({
        success:true,
        data:{
            message:"Work History deleted successfully"
        }
    })
}