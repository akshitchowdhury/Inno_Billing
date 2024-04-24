import { Schema } from "mongoose";
import mongoose from "mongoose";



const invoiceSchema = new Schema(
  {
    client: String,
    project: String,
    services: String,
    address: String,
    state: String,
    city: String,
    pin: Number,
    gst: Number,
    cgst: Number,
    sgst: Number,
    balance: Number,
    qty: Number,
    pfNo: String,
    invNo: String,
    date: String,
    price: Number,
    invCount: {
      type: Number,
      default: 0
    },
    pfCount: {
      type: Number,
      default: 0
    }
  },
  {
    timestamps: true,
  }
);

const Invoice = mongoose.models.Invoice || mongoose.model("Invoice", invoiceSchema);

export default Invoice;
