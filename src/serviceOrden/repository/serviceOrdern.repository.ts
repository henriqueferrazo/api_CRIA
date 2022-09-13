import {Schema, Document} from "mongoose";
import { ServiceOrderInterface } from "../model/servicdOrden.model";

export const ServiceOrdenSchema = new Schema({
    serviceId: {type: String, required: true},
    zipCode: {type: String, required: true},
    latitude: {type: Number, required: true},
    longitude: {type: Number, required: true},
    email: {type: String, required: true}
});

export interface serviceOrdenModel extends ServiceOrderInterface, Document {}