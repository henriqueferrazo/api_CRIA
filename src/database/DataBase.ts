import mongoose from 'mongoose';

export default class DataBase {

    async connectToDataBase() {
        const dataBase:any = process.env.DATABASE_URL
        try{
            await mongoose.connect(dataBase)
            console.log("data base conctado com sucesso")
        }catch(err){
            console.log("erro exception:", err)
        }
    }
}