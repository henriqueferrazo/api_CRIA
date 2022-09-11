import {Request, Response}  from "express"
import AddressConfig from "../config/AddressConfig"
import { Address } from "../model/Address.model"

export default class AdressControler {
    
    //Post
    public async ListenServiceOrden(req:Request, res:Response){
        try{
            const addressConfig = new AddressConfig()
            const {serviceId, destinationPoint:{zipCode, latitude, longitude}, customer:{email}} = req.body
            const filterData = {serviceId , zipCode, latitude, longitude, email}
            console.log("body:", filterData)
            const check = addressConfig.checkSaveServiceOrder(filterData)
            if(check === true){
                const address = new Address(filterData)
                const save = await address.save()
                console.log("save:",save)
                res.status(201).send(save);
            }else{
                res.status(201).json({filterData: filterData ,message:"Endereco não pertence a area CRIA"})
            }
        }catch(err){
            return res.status(404).json({status:404 ,smessage:"erro ao criar endereco", err})
        }
    }

}