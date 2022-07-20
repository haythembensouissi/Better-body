import express, { Request, Response } from "express";
import mongoose from "mongoose";
import { DietModel } from "../database/diets";
const router = express.Router();
// get all diets
router.get("/api/diets", async (req:Request,res:Response)=>{
    const diet= await DietModel.find({})
    return res.status(200).send(diet)
})
// add diet
router.post("/api/diets", async (req:Request,res:Response)=>{
    const name=req.body.name
    const imgurl=req.body.imgurl
    const desc=req.body.desc
    const newDiet= new DietModel({
        _id: new mongoose.Types.ObjectId(),
        name: name,
        img: imgurl,
        description: desc
    })
    newDiet
.save().then(results=>{return res.json(`${results.name} was added`)}).catch(error=>console.log(error))
})
export {router as Dietrouter}
