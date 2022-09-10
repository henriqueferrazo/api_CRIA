import {Router, Request, Response}  from "express"
import AddressConfig from "../config/AddressConfig"

export default class AdressControler {
    
    
    ListenServiceOrden(req:Request, res:Response){
        try{
            const addressConfig = new AddressConfig()
            const {serviceId, destinationPoint:{zipCode}} = req.body
            const filterData = {serviceId , zipCode}
            addressConfig.saveOrNotWorkOrder(filterData)
            res.status(201).send(filterData)

        }catch(err){
            return res.status(404).json({status:404 ,smessage:"erro ao criar endereco", err})
        }
    }

}