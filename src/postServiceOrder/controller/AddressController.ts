import {Router, Request, Response}  from "express"
import AddressConfig from "../config/AddressConfig"
import { Address } from "../model/Address.model"

export default class AdressControler {
    
    //Post
    ListenServiceOrden(req:Request, res:Response){
        try{
            const addressConfig = new AddressConfig()
            const {serviceId, destinationPoint:{zipCode, latitude, longitude}, customer:{email}} = req.body
            const filterData = {serviceId , zipCode, latitude, longitude, email}
            console.log("body:", filterData)
            const check = addressConfig.checkSaveServiceOrder(filterData)
            if(check === true){
                console.log("true")
                res.status(201).send(filterData)
            }
            res.status(201).json({filterData: filterData ,message:"Endereco não pertence a area CRIA"})
        }catch(err){
            return res.status(404).json({status:404 ,smessage:"erro ao criar endereco", err})
        }
    }

}