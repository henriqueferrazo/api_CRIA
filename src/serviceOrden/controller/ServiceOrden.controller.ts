import { Request, Response } from "express";
import ServiceOrdenConfig from "../config/ServidorOrden.conf";
import { ServiceOrden } from "../model/servicdOrden.model";

export default class ServiceOrdenController {
    
    serviceOrdenConfig = new ServiceOrdenConfig()

    public async idServiceOrden(req:Request, res: Response){
        try{
           const body = await this.serviceOrdenConfig.queryId(req,res)
           const save = await ServiceOrden.create(body)
           return res.status(201).send(save)
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