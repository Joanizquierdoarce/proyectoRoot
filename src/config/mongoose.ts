import mongoose from "mongoose";

const connectMongo = async () =>{
    try{
        await mongoose.connect("mongodb+srv://logica2024user:monicaarce@cluster0.svmpx.mongodb.net/user_management")
        console.log("MongoDB conectando correctamente")
    }catch(error){
        console.error("Error conectado a MongoDB: ", error)
        process.exit(1)
    }
}

export default connectMongo;