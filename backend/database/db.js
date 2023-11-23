import mongoose from "mongoose";

export const Connection = async (username, password)=>{
    const URL =`mongodb://${username}:${password}@ac-iq7tx6j-shard-00-00.ynmxzo9.mongodb.net:27017,ac-iq7tx6j-shard-00-01.ynmxzo9.mongodb.net:27017,ac-iq7tx6j-shard-00-02.ynmxzo9.mongodb.net:27017/?ssl=true&replicaSet=atlas-10inhf-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try{
        await mongoose.connect(URL,{ useUnifiedTopology: true , useNewUrlParser:true});
        console.log('Database connected Successfully');

    }catch (error){
        console.log('Error while connecting with the database', error.message);
    }
}

export default Connection;