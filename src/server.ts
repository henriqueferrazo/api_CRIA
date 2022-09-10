import  express from 'express'
import {Router, Request, Response}  from "express";
import  *  as  dotenv  from  'dotenv'
import AdressRouter from './postServiceOrder/router/Router';
import DataBaseAddress from './postServiceOrder/repository/DataBaseAddress';
import AdressControler from './postServiceOrder/controller/AddressController';


dotenv.config({debug: true})
const port = process.env.PORT
const app = express();
const route = Router();
const dataBase = new DataBaseAddress()
const addressController = new AdressControler()

dataBase.connectToDataBase()
app.use(express.json())
app.use(route)

route.get('/', (req:Request, res:Response) =>{
    res.json("olá mundo");
})
route.post('/serviceOrder', addressController.ListenServiceOrden)



app.listen(port, () => {
    console.log(`Servidor rodando na porta http://localhost:${port}`)
})