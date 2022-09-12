import  express from 'express'
import  *  as  dotenv  from  'dotenv'
import DataBaseAddress from './Address/repository/DataBase.address';
import AddressRouter from './Address/router/Address.router';


dotenv.config({debug: true})
const port = process.env.PORT
const app = express();
const dataBase = new DataBaseAddress()

dataBase.connectToDataBase()
app.use(express.json())
app.use('/address',AddressRouter)

app.listen(port, () => {
    console.log(`Servidor rodando na porta http://localhost:${port}`)
})