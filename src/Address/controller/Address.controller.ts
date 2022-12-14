import { Request, Response } from "express"
import AddressConfig from "../config/Address.config"
import { Address } from "../model/Address.model"

const addressConfig = new AddressConfig()
export default class AdressControler {
    


    //Post
    public async createAddress(req: Request, res: Response) {
        try {
            const filterData = addressConfig.queryBody(req);
            const check = addressConfig.checkServiceOrder(filterData)
            if (check === true) {
                await addressConfig.saveAddress(filterData)
                addressConfig.sendEmail(filterData.email)
                return res.status(201).send(filterData)
            } else {
               return res.status(200).json({ filterData: filterData, message: "Address not CRIA" })
            }
        } catch (err) {
            console.log("registration failed:", err)        
            return res.status(404).json({ error: "registration failed"})
        }
    }

    //get id 
    public async findById(req: Request, res: Response) {
        try {
            const getDataBase = await Address.findById(req.params.id)
            if (getDataBase) {
                res.status(200).send(getDataBase)
                console.log("body:", getDataBase)
            }
        } catch (err) {
            console.log("err updade", err)
            return res.status(404).json({ error: "Address not found"})
        }
    }

    //get list
    public async listAddress(req: Request, res: Response) {
        try {
            const address = await Address.find()
            if (address) {
                return res.status(200).send(address)
            }
        } catch (err) {
            console.log("err list address", err)
            return res.status(400).json({ error: "Address not found"});
        }
    }

    //put longitude e latitude
    public async updateAdress(req: Request, res: Response) {
        try {
        const update = addressConfig.updateLatLong(req, res)
        return res.status(200).send(update)
    }catch(err){
        console.log("err updade", err)
        return res.status(400).json({error:"error for updating a geolocation"})
    }
    }
}