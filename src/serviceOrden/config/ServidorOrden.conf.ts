import { Request, Response } from "express";


export default class ServiceOrdenConfig {

    public async queryId(req:Request, res: Response){
        const { internalId } = req.body
        const query = internalId
        return query
    }
}