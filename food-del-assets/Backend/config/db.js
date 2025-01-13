import mongoose from "mongoose";

 export const connectDB = async()=> {
    await mongoose.connect('mongodb+srv://Killzone:9876543210@cluster0.cnotq.mongodb.net/Food-delivery').then(()=>console.log("DB Connected"));
}