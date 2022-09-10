import {Router, Request, Response}  from "express"


export default class AdressControler {
    
    async ListenServiceOrden(req:Request, res:Response){
        res.json(await req.body)
    }

}