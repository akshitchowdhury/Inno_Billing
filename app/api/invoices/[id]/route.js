import connectMongoDb from "@/libs/mongodb";
import Invoice from "@/models/Invoice";
import { NextResponse } from "next/server";

export async function PUT(request, {params}){

    const {id} = params;

    // client,project,
    // description,price,
    // category

    const {
        newClient : client,
                newProject: project,
             newAdress: address,
             newServices: services,
               newState : state,
               newCity: city,
               newPin : pin,
               newGst : gst, 
             newPrice: price,} = await request.json()

    await connectMongoDb();

    await Invoice.findByIdAndUpdate(id, {client,
        project,
        address,
        services,
        state,
        city,
        pin ,
        gst ,
        price})

    return NextResponse.json({message: "Invoice succesfully Edited"}, {status: 200})
}


export async function GET(request, {params}){

    const {id} = params;
    await connectMongoDb();
    const invoice = await Invoice.findOne({_id: id})
    return NextResponse.json({invoice}, {status: 200})
}