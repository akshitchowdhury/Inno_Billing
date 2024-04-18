import { Schema } from "mongoose";
import mongoose from "mongoose";

const invoiceSchema = new Schema(
    {
        client: String,
        project: String,
        description: String,
        price: Number,
        category: String

    },
    {
        timestamps: true
    }
)

const Invoice = mongoose.models.Invoice || mongoose.model("Invoice", invoiceSchema)

export default Invoice;