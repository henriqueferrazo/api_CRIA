import { Request, Response } from "express"
import AddressConfig from "../config/Address.config"
import { Address } from "../model/Address.model"

const addressConfig = new AddressConfig()
export default class AdressControler {

    //Post
    public async createServiceOrden(req: Request, res: Response) {
        try {
            const filterData = addressConfig.queryBody(req, res);
            const check = addressConfig.checkServiceOrder(filterData)
            if (check === true) {
                await addressConfig.saveAddress(filterData)
                addressConfig.sendEmail(filterData.email)
                res.status(201).send(filterData);
            } else {
                res.status(200).json({ filterData: filterData, message: "Address not CRIA" })
            }
        } catch (err) {
            res.status(404).json({ error: "registration failed"})
            console.log("error: registration failed:", err)
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
            res.status(404).json({ error: "Address not found"})
            console.log("err updade", err)
        }
    }

    //get list
    public async listAddress(req: Request, res: Response) {
        try {
            const address = await Address.find()
            if (address) {
                res.status(200).send(address)
            }
        } catch (err) {
            res.status(400).json({ error: "Address not found"});
            console.log("err list address", err)
        }
    }

    //put longitude e latitude
    public async updateAdress(req: Request, res: Response) {
        try {const { id } = req.params
        const { latitude, longitude } = req.body

        const update = await Address.findByIdAndUpdate(
            { _id: id },
            {
                $set: {
                    latitude,
                    longitude
                },
            },
            {
                new: true,
                omitUndefined: true
            }
        );
        return res.status(200).send(update)
    }catch(err){
        res.status(400).json({error:"error for updating a geolocation"})
        console.log("err updade", err)
    }
    }
}