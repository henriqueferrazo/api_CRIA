import  express from 'express';
import  *  as  dotenv  from  'dotenv';
import DataBase from './database/DataBase';
import AddressRouter from './router/Address.router';
import ServiceOrder from './router/ServiceOrder.router';


dotenv.config({debug: true})
const port = process.env.PORT
const app = express();
const dataBase = new DataBase()

dataBase.connectToDataBase()
app.use(express.json())
app.use('/cria',AddressRouter)
app.use('/ee', ServiceOrder)

if(require.main === module){
    app.listen(port, () => {
        console.log(`Servidor rodando na porta http://localhost:${port}`)
    })
}

export default app;