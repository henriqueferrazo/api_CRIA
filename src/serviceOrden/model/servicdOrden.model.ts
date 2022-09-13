import mongoose, { Model } from "mongoose"
import { serviceOrdenModel, ServiceOrdenSchema } from "../repository/serviceOrdern.repository"


export interface ServiceOrdenInterface {
    internalId:number
} 

export const ServiceOrden:Model<serviceOrdenModel> = mongoose.model('ServiceOrden', ServiceOrdenSchema)