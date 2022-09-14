import { Request, Response } from "express";
import DataBase from "../../database/DataBase";
import Util from "../../Util/Util";
import { ServiceOrder } from "../model/servicdOrder.model";


export default class ServiceOrderConfig {

    public async queryId(req:Request, res: Response){
        const { internalId, date } = req.body
        const query = {internalId, date}
        console.log("query:", query)
        const dado = await this.updateDate(req,res)
        console.log("dado:",dado)
        return query
    }

    public async updateDate(req:Request, res: Response){
        const {internalId} = req.params
        const util = new Util()
        await ServiceOrder.findOneAndUpdate(
            {internalId:internalId},
            {
                $set:{
                    date: util.dateDay()
                }
            }
        )
    }

    public async saveId(body:object) {
        const serviceOrder = new ServiceOrder(body)
        serviceOrder.save()
    }

    // public fetchWorkOrderEE(){

    // }


}