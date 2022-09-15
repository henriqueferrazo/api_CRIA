import { Request, Response } from "express";
import axios from 'axios';

const TOKEN ='Bearer eyJhbGciOiJIUzUxMiJ9..rvXZpIA0IL54LIe0fe55PmRjvJdkwttNcfxiBHhPsL8L_QAesn_aj_EPLvuJtO3iLcz4nJMDbUMe4am52wk5aw'
export default class ConectEE {
    public async queryServiceOrder(internalId:number){
        try{
            const response = await axios.get(`https://api.euentrego.com.br/corporate-api/service-orders/${internalId}`,{
                headers: {
                    'Authorization': `${TOKEN}`
                  }
            })
            console.log("respnse:", response.data)
            const json = JSON.stringify(response.data)
           this.postServiceOrder(json)
        }catch(err){
            console.log("error accessing api Eu entrego with axios", err)
        }
    }

    private async postServiceOrder(body:string){
       try{
           const response = await axios.post(`http://localhost:3333/cria/address`,{body})      
           console.log("body",response.data)    
       }catch(err){
        console.log("error accessing api Cria with axios", err)
       }
    }
}