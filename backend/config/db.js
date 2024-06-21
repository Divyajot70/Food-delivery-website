import mongoose from "mongoose";

 export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://Tomato-food:qwer1234@cluster0.9ty3spm.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}