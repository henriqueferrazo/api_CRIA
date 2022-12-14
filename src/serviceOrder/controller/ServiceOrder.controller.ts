import { Request, Response } from "express";
import ServiceOrderConfig from "../config/ServidorOrder.confg";
import ConnectEE from '../../Service/ConnectEE'

const serviceOrdenConfig = new ServiceOrderConfig()
const connectEE = new ConnectEE()
export default class ServiceOrdenController {
    

    public async idServiceOrden(req:Request, res: Response){
        try{
           const body = await serviceOrdenConfig.queryIdAndDate(req,res)
           await serviceOrdenConfig.saveId(body)
           console.log(body.internalId)
           await connectEE.queryServiceOrder(body.internalId)
           return res.status(201).send(body)
        }catch(err){
            console.log("error create failed:", err)
            return res.status(400).json({error: "create failed"})
        }
    }

    public async getByServiceOrdenId(req:Request, res: Response){
        try{
            

        }catch(err){
            console.log("error not found:", err)
            return res.status(400).json({error: "Not found"})
        }
    }

}