import { Request, Response } from "express";
import axios from 'axios';

export default class ConectEE {
    public async queryServiceOrder(internalId:number){
        const response = await axios.get(`https://api.euentrego.com.br/corporate-api/service-orders/${internalId}`)
        return response.data
    }
}