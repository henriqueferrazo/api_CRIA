import mongoose, { Model } from "mongoose";
import { AddressModel, AddressSchema } from "../repository/Adress.repository";


export interface AddressInterface {
    serviceId: string
    zipCode: string;
    latitude: 0;
    longitude: 0;
    email: string;
} 

export const Address:Model<AddressModel> = mongoose.model('Address', AddressSchema)