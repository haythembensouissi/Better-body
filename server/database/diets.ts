import { Document, Schema, model } from "mongoose"; 
export default interface IDiet extends Document {
    name: string;
    img: string;
    description: string;
    category: string;
  }
 
  const DietSchema = new Schema<IDiet>({
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
    category: {
      type: String,
      enum:["breakfast","lunch","dinner"],
      required:true
    }
  });
  export const DietModel =model<IDiet>("diets",DietSchema)
