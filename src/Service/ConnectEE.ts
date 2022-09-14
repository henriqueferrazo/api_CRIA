import { Request, Response } from "express";
import axios from 'axios';

const TOKEN = process.env.TOKEN_ACESS
export default class ConectEE {
    public async queryServiceOrder(internalId:number){
        try{
            const response = await axios.get(`https://api.euentrego.com.br/corporate-api/service-orders/${internalId}`,{
                headers: {
                    'Authorization': `${TOKEN}`
                  }
            })
           response.data
        }catch(err){
            console.log("error accessing api Eu entrego with axios")
        }
    }

    private async postServiceOrder(body:object){
       try{
           const responde = await axios.post(`http://localhost:3000/cria/address`,{
               body
           })          
       }catch(err){
        console.log("error accessing api Cria with axios")
       }
    }
}