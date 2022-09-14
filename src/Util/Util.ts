
export default class Util {
    
    public finalNumber(zipCode:string):string {
       const splitZipCode = zipCode.split("").slice(-3).join("");
        return splitZipCode;
    }
    
    public dateDay(){
        const date = new Date()
        return date;
    }
} 