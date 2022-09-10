
export default class Util {
    finalNumber(zipCode:string):string {
       const splitZipCode = zipCode.split("").slice(-3).join("");
        return splitZipCode;
    }

    checkZipCode(finalNumber:string):void {
        const number = this.finalNumber(finalNumber)
        if(number >= '366'){
            
        }
    }
} 