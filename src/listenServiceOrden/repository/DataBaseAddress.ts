import mongoose from 'mongoose';
import AddressEnd from '../model/AddressEnd';

const addressEnd = new AddressEnd()
export default class DataBaseAddress {

    async connectToDataBase() {
        const dataBase:any = process.env.DATABASE_URL
        try{
            await mongoose.connect(dataBase)
            console.log("data base conctado com sucesso")
        }catch(err){
            console.log("erro exception:", err)
        }
    }

    main() {
        const AddressEndSchema = new mongoose.Schema(addressEnd)
        const addressEndCria = mongoose.model('AddressEnd', AddressEndSchema)

        AddressEndSchema.path('_id')
    }
}