import { Document, Schema, model } from "mongoose";
import { AddressInterface } from "./AddressEnd";

export interface AddressModelInterface extends AddressInterface, Document {
    
}

export const AddressSchema = new Schema({
    serviceId:{
        type: String,
        requered: true,
    },
    zipCode:{
        type: String,
        required: true,
    },
    latitude:{
        type: Number,
        required: true
    },
    longitude:{
        type: Number,
        required: true
    }
})