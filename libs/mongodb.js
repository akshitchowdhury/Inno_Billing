import mongoose from "mongoose"

const connectMongoDb = async ()=>{
    try {
        
       await mongoose.connect("mongodb+srv://akshitchowdhury:akshitchowdhury@cluster0.ywftldt.mongodb.net/inno_billing",
       { useNewUrlParser: true, useUnifiedTopology: true })
        console.log("connected to Mongo DB")
    } catch (error) {
        console.log(error)
    }
}

export default connectMongoDb;