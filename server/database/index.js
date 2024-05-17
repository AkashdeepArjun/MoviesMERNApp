import mongoose from 'mongoose'


const dbSetUp =async()=>{
    
    try{

        await mongoose.connect("mongodb://localhost:27017/cinema")
        console.log("connection success")
    }catch(e){
    
        console.log(e);

    }
    


    
}


export default dbSetUp