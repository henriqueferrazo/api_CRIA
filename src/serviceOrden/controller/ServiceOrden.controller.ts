import { Request, Response } from "express";
import ServiceOrdenConfig from "../config/ServidorOrden.conf";

export default class ServiceOrdenController {
    
    serviceOrdenConfig = new ServiceOrdenConfig()

    public async idServiceOrden(req:Request, res: Response){
        try{
           this.serviceOrdenConfig.queryId(req.res)

        }catch(err){

        }
    }
}