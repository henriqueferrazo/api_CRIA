import SendEmailNode, {transport}from "../../emailTrigger/sendEmail";
import Util from "../../Util/Util";
import { Address } from "../model/Address.model";

const sendEmail = new SendEmailNode()
export default class AddressConfig {

    checkServiceOrder(body: object): boolean {
        const valuesObjects = Object.values(body)
        const zipCode = this.validateZipCode(valuesObjects[1])
        const check = this.checkZipCode(zipCode);
        if (check === true) {
            this.sendEmailConfig(valuesObjects[4])
            return true
        }
        return false;
    }
    async saveDataAddress(body:object) {
        const address = await new Address(body)
        address.save()
    }

    validateZipCode(zipCode: string) {
        const util = new Util();
        return util.finalNumber(zipCode);
    }

    checkZipCode(finalNumber: string): boolean {
        if (finalNumber === '330') {
            return true
        }
        return false
    }

    sendEmailConfig(email:string):void {
        const emailMessage = sendEmail.runEmail(email)
        transport.sendMail(emailMessage, (err) => {
            if(err){
                console.log(err)
            }else {
                console.log("Email enviado com sucesso", emailMessage)
            }
        })
    }  
}