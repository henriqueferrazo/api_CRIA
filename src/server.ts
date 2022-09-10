import  express from 'express'
import {Router, Request, Response}  from "express";
// import AdressRouter from './listenServiceOrden/router/Router';
import DataBaseAddress from './database/DataBaseAddress';
import  *  as  dotenv  from  'dotenv'
dotenv.config({debug: true})

const port = process.env.PORT || 3000

const app = express();
const route = Router();
const dataBase = new DataBaseAddress()

dataBase.connectToDataBase()
app.use(express.json())

route.get('/', (req:Request, res:Response) =>{
    res.json("olá mundo");
})

app.use(route)

app.listen(3000, () => {
    console.log("Servidor rodando na porta http://localhost:3000")
})