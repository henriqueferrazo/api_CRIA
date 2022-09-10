import { Document, Schema, model } from "mongoose";
import { AddressInterface } from "./Address";
import Util from "../../Util/Util";

const util = new Util()
export interface AddressModelInterface extends AddressInterface, Document {

}

export const AddressSchema = new Schema({
    serviceId: String,
    zipCode: String,
    latitude: Number,
    longitude: Number,
});



