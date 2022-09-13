import { Request, Response } from "express";
import axios from 'axios';

const TOKEN = process.env.TOKEN_ACESS
export default class ConectEE {
    public async queryServiceOrder(internalId:number){
        const response = await axios.get(`https://api.euentrego.com.br/corporate-api/service-orders/${internalId}`,{
            headers: {
                'Authorization': `${TOKEN}`
              }
        })
        console.log("response:", response)
        return response.data
    }
}