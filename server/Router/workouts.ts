import mongoose from "mongoose";
import { WorkoutModel } from "../database/workout";
import express, { Request, Response } from "express";
const router=express.Router()
router.get("/api/workouts",async (req:Request,res:Response)=>{
    const workout= await WorkoutModel.find({})
    res.status(200).send(workout)
})
router.post("/api/workouts",async (req:Request,res:Response)=>{
    const name=req.body.name
    const img=req.body.img
    const description=req.body.description
    const categorie=req.body.categorie
    const newWorkout=new WorkoutModel({
        _id:new mongoose.Types.ObjectId(),
        name:name,
        img:img,
        description:description,
        categorie:categorie
    })
    newWorkout.save().then(results=>res.json(`${results.name} was added `)).catch(error=>console.log(error))
})
export {router as workoutRouter}
