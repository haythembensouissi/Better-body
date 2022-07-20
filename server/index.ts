import mongoose from "mongoose";
import express from "express";
import { json } from "body-parser";
import {userRouter} from  "./Router/User"
import { Dietrouter } from "./Router/Diet";
import { workoutRouter } from "./Router/workouts";
import cors from "cors"
const app=express()
app.use(json());
const port=2000
//app
app.use(express.json())
app.use(cors())
//User
app.use(userRouter)
app.use(Dietrouter)
app.use(workoutRouter)




mongoose.connect("mongodb://localhost:27017/betterB", () => {
  console.log("Connected to database...");
});
app.listen(port,()=>{
    console.log(`listening on port ${port}`)
})
