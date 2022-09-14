import { Request, Response } from "express";
import DataBase from "../../database/DataBase";
import Util from "../../Util/Util";
import { ServiceOrder } from "../model/servicdOrder.model";


export default class ServiceOrderConfig {

    public async queryIdAndDate(req:Request, res: Response){
        const { internalId, processedAt } = req.body
        const query = {internalId, processedAt}
        console.log("query:", query)
        return query
    }

    public async saveId(body:object) {
        const serviceOrder = new ServiceOrder(body)
        serviceOrder.save()
    }

    // public fetchWorkOrderEE(){

    // }


}