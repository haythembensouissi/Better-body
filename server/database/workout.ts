import { Document, Schema, model } from "mongoose"; 

export default interface IWorkout extends Document {
    name: string;
    img: string;
    description: string;
    categorie:string;
    week:number;
  }
 
  const WorkoutSchema = new Schema<IWorkout>({
    name: {
      type: String,
    
    },
    img: {
      type: String,
  
    },
    description: {
      type: String,
      required: true,
    },
    categorie:{
        type : String,
        required:true,
        enum:["push","pull","core","legs"]
    },
    week:{
      type :Number,
      required:true
    }
  });
  export const WorkoutModel =model<IWorkout>("workouts",WorkoutSchema)
