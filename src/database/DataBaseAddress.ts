import mongoose from 'mongoose';

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
        
        const AddressEndCriaSchema = new mongoose.Schema({
            serviceId: Number,
            zipCode: String
        })
        const addressEndCria = mongoose.model('addressEndCria', AddressEndCriaSchema)

        AddressEndCriaSchema.path('_id')

    }
}