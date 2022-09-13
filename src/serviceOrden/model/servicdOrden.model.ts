import mongoose, { Model } from "mongoose"
import { serviceOrdenModel, ServiceOrdenSchema } from "../repository/serviceOrdern.repository"


export interface ServiceOrderInterface {
    internalId:number
} 

export const serviceOrder:Model<serviceOrdenModel> = mongoose.model('Address', ServiceOrdenSchema)