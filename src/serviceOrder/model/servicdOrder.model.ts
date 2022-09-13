import mongoose, { Model } from "mongoose"
import { serviceOrderModel, ServiceOrderSchema} from "../repository/serviceOrdern.repository"


export interface ServiceOrderInterface {
    internalId:number
} 

export const ServiceOrder:Model<serviceOrderModel> = mongoose.model('ServiceOrden', ServiceOrderSchema)