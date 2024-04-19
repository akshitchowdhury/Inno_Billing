import { Schema } from "mongoose";
import mongoose from "mongoose";

// client,
//         project,
//         address,
//         state,
//         city,
//         pin ,
//         gst ,
// price


// newClient : client,
//         newProject: project,
//      newAdress: address,
//        newState : state,
//        newCity: city,
//        newPin : pin,
//        newGst : gst 
//      newPrice: price,

        


const invoiceSchema = new Schema(
    {
        client: String,
        project: String,
        services : String,
        address : String,
        state: String,
        city: String,
        pin : Number,
        gst : Number,
        price: Number,
        

    },
    {
        timestamps: true
    }
)

const Invoice = mongoose.models.Invoice || mongoose.model("Invoice", invoiceSchema)

export default Invoice;