import { Document, Schema, model } from "mongoose"; 
export default interface IDiet extends Document {
    name: string;
    img: string;
    description: string;
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
    }
  });
  export const DietModel =model<IDiet>("diets",DietSchema)
