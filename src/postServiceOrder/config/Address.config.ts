import runEmail from "../../emailTrigger/sendEmail";
import Util from "../../Util/Util";
import { Address } from "../model/Address.model";

export default class AddressConfig {

    checkSaveServiceOrder(body: object): boolean {
        const valuesObjects = Object.values(body)
        const zipCode = this.validateZipCode(valuesObjects[1])
        const check = this.checkZipCode(zipCode);
        if (check === true) {
            // this.email(valuesObjects[4])
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

    // email(email:string){
    //     runEmail(email)
    // }

  
}