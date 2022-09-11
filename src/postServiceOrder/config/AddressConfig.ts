import Util from "../../Util/Util";
import AdressControler from "../controller/AddressController";
import { AddressModel, AddressSchema } from "../model/Address.model";

export default class AddressConfig {

    checkSaveServiceOrder(body:object): boolean {
        const valuesObjects = Object.values(body)
        const zipCode = this.validateZipCode(valuesObjects[valuesObjects.length - 1])
        const check = this.checkZipCode(zipCode);
        if(check === true){
            return true
        }
        return false;
    }

    validateZipCode(zipCode:string){
        const util = new Util();
        return util.finalNumber(zipCode);
    }

    checkZipCode(finalNumber:string):boolean {
        if(finalNumber === '330'){
            return true
        }
            return false
    }
}