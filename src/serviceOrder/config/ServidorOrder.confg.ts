import { Request, Response } from "express";
import DataBase from "../../database/DataBase";
import { ServiceOrder } from "../model/servicdOrder.model";


export default class ServiceOrderConfig {

    public async queryId(req:Request, res: Response){
        const { internalId, date } = req.body
        const query = {internalId, date}
        return query
    }

    private async updateDate(date:Date){
        await ServiceOrder.updateOne()
    }

    public async saveId(body:object) {
        const serviceOrder = new ServiceOrder(body)
        serviceOrder.save()
    }

    // public fetchWorkOrderEE(){

    // }


}