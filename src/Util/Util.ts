
export default class Util {
    finalNumber(zipCode:string):string {
       const splitZipCode = zipCode.split("").slice(-3).join("");
        return splitZipCode;
    }

    checkZipCode(finalNumber:string):string {
        const numberEnd:string = this.finalNumber(finalNumber)
        if(numberEnd >= '366'){
            return numberEnd;
        }
        return ""
    }
} 