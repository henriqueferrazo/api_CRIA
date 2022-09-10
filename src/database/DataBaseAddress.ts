import mongoose from 'mongoose';
import AddressEnd from '../listenServiceOrden/model/AddressEnd';

export default class DataBaseAddress {

    async connectToDataBase() {
        try{
            const url = 'mongodb+srv://EE-CRIA:henriford123@cluster0.sqrxr0s.mongodb.net/?retryWrites=true&w=majority'
            await mongoose.connect(url)
            const db = mongoose.connection
            db.once('connecting', () => console.log("conectado com sucesso"))
        
        }catch(err){
            console.log("erro exception:", err)
        }
        

    }
    main() {
        
        const AddressEndCriaSchema = new mongoose.Schema({
            serviceId: Number,
            zipCode: String
        })
        const addressEndCria = mongoose.model('addressEndCria', AddressEndCriaSchema)

        AddressEndCriaSchema.path('_id')

    }
}