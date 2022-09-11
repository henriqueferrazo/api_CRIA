import {Request, Response}  from "express"
import runEmail from "../../emailTrigger/sendEmail"
import AddressConfig from "../config/Address.config"

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
                await addressConfig.saveDataAddress(filterData)
                res.status(201).send(filterData);
            }else{
                res.status(200).json({filterData: filterData ,message:"Endereco não pertence a area CRIA"})
            }
        }catch(err){
            return res.status(404).json({status:404 ,smessage:"erro ao criar endereco", err})
        }
    }

}