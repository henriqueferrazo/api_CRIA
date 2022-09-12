import {Schema, Document} from "mongoose";
import { AddressInterface } from "../model/Address.model";

export const AddressSchema = new Schema({
    serviceId: {type: String, required: true},
    zipCode: {type: String, required: true},
    latitude: {type: Number, required: true},
    longitude: {type: Number, required: true},
    email: {type: String, required: true}
});

export interface AddressModel extends AddressInterface, Document {}