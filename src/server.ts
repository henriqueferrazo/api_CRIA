import  express from 'express'
import {Router, Request, Response}  from "express";
// import AdressRouter from './listenServiceOrden/router/Router';
import DataBaseAddress from './listenServiceOrden/repository/DataBaseAddress';
import  *  as  dotenv  from  'dotenv'
import AdressControler from './listenServiceOrden/controller/AddressController';
dotenv.config({debug: true})

const port = process.env.PORT || 3000

const app = express();
const route = Router();
const dataBase = new DataBaseAddress()
const addressController = new AdressControler()


dataBase.connectToDataBase()
app.use(express.json())

route.get('/', (req:Request, res:Response) =>{
    res.json("olá mundo");
})
route.post('/serviceOrder', addressController.ListenServiceOrden)


app.use(route)

app.listen(port, () => {
    console.log(`Servidor rodando na porta http://localhost:${port}`)
})