import  express, {Request, Response} from 'express'
import  *  as  dotenv  from  'dotenv'
import DataBaseAddress from './postServiceOrder/repository/DataBaseAddress';
import AdressControler from './postServiceOrder/controller/AddressController';
import AddressRouter from './postServiceOrder/router/Router';


dotenv.config({debug: true})
const port = process.env.PORT
const app = express();
const dataBase = new DataBaseAddress()
const addressController = new AdressControler()

dataBase.connectToDataBase()
app.use(express.json())
app.use('/address',AddressRouter)

app.get('/', (req:Request, res:Response) =>{
    res.json("olá mundo");
})


app.listen(port, () => {
    console.log(`Servidor rodando na porta http://localhost:${port}`)
})