import connectMongoDb from "@/libs/mongodb"
import Invoice from "@/models/Invoice";
import { connect } from "mongoose"
import { NextResponse } from "next/server";


//post or add a topic

export async function POST(request){

    const{client,project,
        description,price,
    category} = await request.json()

    await connectMongoDb();
    await Invoice.create({client,project,
        description,price,
    category})

    return NextResponse.json({message: "Invoice created"}, {status: 201})
}

//fetch all topics

export async function GET(){
    await connectMongoDb();
   const invoices = await Invoice.find()

   return NextResponse.json({invoices})
}


//delete a topic

export async function DELETE(request){

    const id = request.nextUrl.searchParams.get("id") //Technique to search id and delete in next JS via params

    await connectMongoDb();
    await Invoice.findByIdAndDelete(id)
    return NextResponse.json({message: 'Invoice Deleted'}, {status: 200})
}

