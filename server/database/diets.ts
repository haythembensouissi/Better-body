import { Document, Schema, model } from "mongoose"; 
export default interface IDiet extends Document {
  nameReceipe: string;
    image: string;
    description: string;
    category: string;
    recipe:string;
    ingredients:string;
  }
 
  const DietSchema = new Schema<IDiet>({
    nameReceipe: {
      type: String,
    
    },
    image: {
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
    },
    recipe: {
      type: String,
      required:true
    },
    ingredients: {
      type: String,
      required:true
    }
    
  });
  export const DietModel =model<IDiet>("diets",DietSchema)
