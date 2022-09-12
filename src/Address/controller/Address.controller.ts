import { Request, Response } from "express"
import AddressConfig from "../config/Address.config"
import { Address } from "../model/Address.model"

const addressConfig = new AddressConfig()
export default class AdressControler {

    //Post
    public async createServiceOrden(req: Request, res: Response) {
        try {
            const { serviceId, destinationPoint: { zipCode, latitude, longitude }, customer: { email } } = req.body
            const filterData = { serviceId, zipCode, latitude, longitude, email }
            console.log("body:", filterData)
            const check = addressConfig.checkServiceOrder(filterData)
            if (check === true) {
                await addressConfig.saveDataAddress(filterData)
                console.log("filter:", filterData)
                res.status(201).send(filterData);
            } else {
                res.status(200).json({ filterData: filterData, message: "Address not CRIA" })
            }
        } catch (err) {
            return res.status(404).json({ status: 404, smessage: "registration failed", err })
        }
    }

    //get id 
    public async findById(req: Request, res: Response) {
        try {
            const getDataBase = await Address.findById(req.params.id)
            if(getDataBase){
                res.status(200).send(getDataBase)    
                console.log("body:", getDataBase)
            }
        } catch (err) {
            res.status(404).send({ message: "Address not found", error: err })
        }
    }

    public async listAddress(req: Request, res: Response){
        try{
            const address = await Address.find()
            if(address){
                res.status(200).send(address)
            }
        }catch(err){
            res.status(400).send({message:"Address not found", error: err});
        }
    }
}