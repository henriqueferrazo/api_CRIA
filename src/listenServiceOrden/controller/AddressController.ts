import {Router, Request, Response}  from "express"


export default class AdressControler {
    
    async ListenServiceOrden(req:Request, res:Response){
        try{
            res.status(201).json( await req.body)
            console.log("body :",req.body)
        }catch(err){
           return res.status(404).json({status:404 ,smessage:"erro ao criar endereco", err})
            console.log("erro na api post de enderecos:", err)
        }

    }

}