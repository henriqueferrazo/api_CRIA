
export default class Util {
    
    public finalNumber(zipCode:string):string {
       const splitZipCode = zipCode.split("").slice(-3).join("");
        return splitZipCode;
    }
    
    public dateDay(){
        const date = new Date()
        const reframe = {
            year: date.getFullYear(),
            month: date.getMonth(),
            day: date.getDate()
        }
        return `${reframe.day}-${reframe.month}-${reframe.year}`;
    }
} 