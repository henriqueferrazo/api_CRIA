import {Schema, Document} from "mongoose";
import { ServiceOrderInterface } from "../model/servicdOrder.model";

export const ServiceOrderSchema = new Schema({
    internalId: {type: Number, required: true},
    processedAt:{type:String, required: true}
});

export interface serviceOrderModel extends ServiceOrderInterface, Document {}