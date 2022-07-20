import mongoose from "mongoose";
import { WorkoutModel } from "../database/workout";
import express, { Request, Response } from "express";
const router=express.Router()
//get allworkouts
router.get("/api/workouts",async (req:Request,res:Response)=>{
    const workout= await WorkoutModel.find({})
    res.status(200).send(workout)
})
// //get push workouts
// router.get("/api/workouts/push", async (req:Request,res:Response)=>{
//     const workout= await WorkoutModel.find({"categorie":"push"})
//     res.status(200).send(workout)
// })
// //get legs workouts
// router.get("/api/workouts/legs", async (req:Request,res:Response)=>{
//     const workout= await WorkoutModel.find({"categorie":"legs"})
//     res.status(200).send(workout)
// })
// //get core workouts
// router.get("/api/workouts/core", async (req:Request,res:Response)=>{
//     const workout= await WorkoutModel.find({"categorie":"core"})
//     res.status(200).send(workout)
// })
// //get pull workouts
// router.get("/api/workouts/pull", async (req:Request,res:Response)=>{
//     const workout= await WorkoutModel.find({"categorie":"pull"})
//     res.status(200).send(workout)
// })
// //get workouts by week
// router.get("/api/workouts/filteredworkouts" ,async (req:Request,res:Response)=>{
//     const filteredworkouts= await WorkoutModel.find({"week":req.body.week})
//     res.status(200).send(filteredworkouts)
// })
//add workout
router.post("/api/workouts",async (req:Request,res:Response)=>{
    const name=req.body.name
    const img=req.body.img
    const description=req.body.description
    const categorie=req.body.categorie
    const week=req.body.week
    const newWorkout=new WorkoutModel({
        _id:new mongoose.Types.ObjectId(),
        name:name,
        img:img,
        description:description,
        categorie:categorie,
        week:week
    })
    newWorkout.save().then(results=>res.json(`${results.name} was added `)).catch(error=>console.log(error))
})
export {router as workoutRouter}

router.get(`/api/workouts/:type`, async (req:Request,res:Response)=>{
    const breakfast = await WorkoutModel.find({categorie:req.params.type})
    return res.send(breakfast)
})
