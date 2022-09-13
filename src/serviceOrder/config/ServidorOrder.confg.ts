import { Request, Response } from "express";
import { ServiceOrder } from "../model/servicdOrder.model";


export default class ServiceOrderConfig {

    public async queryId(req:Request, res: Response){
        const { internalId } = req.body
        const query = {internalId}
        return query
    }

    public async saveId(body:object) {
        const serviceOrder = new ServiceOrder(body)
        serviceOrder.save()
    }

    public fetchWorkOrderEE(){

    }

}