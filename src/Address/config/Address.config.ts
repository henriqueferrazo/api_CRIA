import { Request, Response } from "express";
import SendEmailNode, { transport } from "../../emailTrigger/sendEmail";
import Util from "../../Util/Util";
import { Address } from "../model/Address.model";

export default class AddressConfig {

    sendEmailNode = new SendEmailNode()

    public checkServiceOrder(body: object): boolean {
        const valuesObjects = Object.values(body)
        const zipCode = this.validateZipCode(valuesObjects[1])
        const check = this.checkZipCode(zipCode);
        if (check === true) {
            return true
        }
        return false;
    }
    public async saveAddress(body: object) {
        const address = await new Address(body)
        address.save()
    }

    private validateZipCode(zipCode: string) {
        const util = new Util();
        return util.finalNumber(zipCode);
    }

    private checkZipCode(finalNumber: string): boolean {
        if (finalNumber === '330') {
            return true
        }
        return false
    }

    public sendEmail(email: string): void {
        const emailMessage = this.sendEmailNode.runEmail(email)
        transport.sendMail(emailMessage, (err) => {
            if (err) {
                console.log(err)
            } else {
                console.log("Email enviado com sucesso", emailMessage)
            }
        })
    }

    public queryBody(req: Request, res: Response) {
        const { 
            serviceId,
            destinationPoint: {   
                zipCode,
                latitude,
                longitude
            },
            customer: {
                email
            }
        } = req.body
        
        const filterData = { serviceId, zipCode, latitude, longitude, email }
        return filterData;
    }

    public async updateLatLong(req: Request, res: Response) {
        const { id } = req.params
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
    }
}