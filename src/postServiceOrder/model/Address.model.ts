import mongoose, { Document, Schema, Model } from "mongoose";

export interface Address {
    serviceId: string
    zipCode: string;
    latitude: 0;
    longitude: 0;
    email: string;
} 

export const AddressSchema = new Schema({
    serviceId: {type: String, required: true},
    zipCode: {type: String, required: true},
    latitude: {type: Number, required: true},
    longitude: {type: Number, required: true},
    email: {type: String, required: true}
});

export interface AddressModel extends Address, Document {}
// export const AddressModel = model("AddressModel", AddressSchema)

export const Address:Model<AddressModel> = mongoose.model('Address', AddressSchema)