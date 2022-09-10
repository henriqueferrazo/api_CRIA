import Util from "../../Util/Util";
import AdressControler from "../controller/AddressController";
import { AddressModel, AddressSchema } from "../model/Address.model";

export default class AddressConfig {

    saveOrNotWorkOrder(body:object) {
        const valuesObjects = Object.values(body)
        const zipCode = this.validateZipCode(valuesObjects[valuesObjects.length - 1])
        const check = this.checkZipCode(zipCode)

        if(check === true){
            const address = new AddressModel()
            address.save()
            .then((result) => console.log("salvo com sucesso", result))
            .catch((err) => console.log("erro ao salvar dado no banco", err))
        }
    }

    validateZipCode(zipCode:string){
        const util = new Util();
        return util.finalNumber(zipCode);
    }

    checkZipCode(finalNumber:string):boolean {
        if(finalNumber === '267'){
            return true
        }
            return false
    }
}