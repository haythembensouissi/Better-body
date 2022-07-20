import { Document, Schema, model } from "mongoose"; 
export default interface IUser extends Document {
    name: string;
    img: string;
    email: string;
    password: string;
    weight: number;
    height: number;
    imc: number;
    description: string;
  }
  // 2. Create schema unsing typescript
  
  const UserSchema = new Schema<IUser>({
    name: {
      type: String,
    
    },
    img: {
      type: String,
  
    },
    email: {
      type: String,
      required: true,
    },
    password:{
      type: String,
      required: true,
    },
    weight: Number,
    height: Number,
    imc: Number,
    description: String,
  });
  export const UserModel =model<IUser>("users",UserSchema)
