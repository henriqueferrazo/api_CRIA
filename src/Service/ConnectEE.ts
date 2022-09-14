import { Request, Response } from "express";
import axios from 'axios';

const TOKEN ='Bearer eyJhbGciOiJIUzUxMiJ9.eyJuYmYiOjE2NjI3MzE3ODMsImlhdCI6MTY2MjczMTc4Mywic3ViIjoiRUVfQ1JJQSIsImlzcyI6IkVFX0NSSUEiLCJleHAiOjE3MjU4OTAxODMsInJvbGUiOiJBUEkiLCJuYW1lIjoiRUVfQ1JJQSIsImNvcnBvcmF0ZUNvZGUiOiJFRV9DUklBIn0.rvXZpIA0IL54LIe0fe55PmRjvJdkwttNcfxiBHhPsL8L_QAesn_aj_EPLvuJtO3iLcz4nJMDbUMe4am52wk5aw'
export default class ConectEE {
    public async queryServiceOrder(internalId:number){
        try{
            const response = await axios.get(`https://api.euentrego.com.br/corporate-api/service-orders/${internalId}`,{
                headers: {
                    'Authorization': `${TOKEN}`
                  }
            })
            console.log("respnse:", response.data)
           this.postServiceOrder(response.data)
        }catch(err){
            console.log("error accessing api Eu entrego with axios", err)
        }
    }

    private async postServiceOrder(body:object){
       try{
           const response = await axios.post(`http://localhost:3333/cria/address`,{body})      
           console.log("body",response.data)    
       }catch(err){
        console.log("error accessing api Cria with axios", err)
       }
    }
}