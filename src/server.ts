import  express from 'express'
import {Router, Request, Response}  from "express";
import AdressRouter from './listenServiceOrden/router/Router';


const app = express();
const route = Router();

app.use(express.json())
app.use('address/', AdressRouter)

route.get('/', (req:Request, res:Response) =>{
    res.json("olá mundo");
})

app.use(route)

app.listen(3000, () => {
    console.log("Servidor rodando na porta http://localhost:3000")
})