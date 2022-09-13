import { Request, Response } from "express";
import ServiceOrderConfig from "../config/ServidorOrder.confg";

const serviceOrdenConfig = new ServiceOrderConfig()

export default class ServiceOrdenController {
    

    public async idServiceOrden(req:Request, res: Response){
        try{
           const body = await serviceOrdenConfig.queryId(req,res)
           await serviceOrdenConfig.saveId(body)
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