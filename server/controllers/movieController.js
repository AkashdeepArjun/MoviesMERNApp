import { GridFSBucketWriteStream } from "mongodb";
import movieModel from "../models/movie_schema.js";

import {getFullUrl, getQueriesFromLink, isEmpty, parseLink} from "../utils/mylib.js"


const createMovie =async(req,res)=>{

    try {


        const body=req.body

        if(!body){
    
            res.status(400).json({status:"you have not provided the fucking request body",status_code:400})
    
        } else{
    
    
            const newMovie=new movieModel(body)
    
            if(!newMovie){
    
                res.status(400).json({status:"cant create new moviw model ",status_code:400})
    
            }
    
           const response =newMovie.save()
                                    .then(()=>{return res.status(201).json({status:"okay creation movie",status_code:201})})
                                    .catch((error)=>{return res.status(400).json({status:"failed to create movie",status_code:400})})
            console.log("movie creat success!!")
    
    
        }
    



        
    } catch (error) {
        console.log(error)
    }
   

}


const updateMovie =async (req,res)=>{

    const body =req.body
    try{
        const target_movie = await movieModel.find({name:req.params.naam})
        if(!body || isEmpty(target_movie) || isEmpty(req.params)){
    
            return res.status(400).json({status:"params/body/target movie khali hai  ya fir poplu laal",status_code:400})
    
        }else{
    
    
             movieModel.updateOne({"name":req.params.naam},{"name":body.name,"time":body.time,"rating":body.rating}).then(()=>{

                return res.status(202).json({status:"updation went well",status_code:202})


             }).catch((e)=>{return res.status(400).json({status:"oh my gawd error aa gya 😑",status_code:400})})
            
            console.log("upate success")
    
        }

    }catch(e){
        console.log(e)

    }
}



const deleteMovie=async(req,res)=>{

    console.log(`dekho parameter aaya hai ${req.params.title}`)

    const body =req.body
    try{

        if(!body){
    
            res.send("<p>you must provide movie object </p>")
    
        }else{
            const movie_exist= await movieModel.find({"name":req.params.title})
            console.log("MOVIE EXIST OR NOT ?:",movie_exist)
            if(isEmpty(movie_exist)){


                return res.status(400).json({
                    status:"always issue with that stupid approach",status_code:400})
                
                
            }else {

                    movieModel.deleteOne({"name":req.params.title}).then(()=>{return res.status(202).json({status:"deleteion success okay lol",status_code:202})}).catch((e)=>{return res.status(400).json({
                        status:"always issue with that stupid approach",status_code:400
                    })})


                }
            
          
            console.log("delete success")
            
        }

    }catch(e){
        console.log(e)

    }

}



const getAllMovies =async(req,res)=>{
    // console.log("queries are ",req.query);

    try {
        
    
        const enteries = await movieModel.find({},{_id:0,time:0});
        // const p= req.params.rid      //PARAMETERS  ARE VALUES THAT PASSED DIRECTLY

        if(enteries!=null){

            return res.status(202).json({status:"okay report",data:enteries,status_code:202})
        }else{

            return res.status(400).json({status:"data did not fetched",status_code:400})
        }
        
        // res.send(`<h1> query is ${req.query}</h1>`)
    } catch (error) {
        console.log(error);
    }







}


const randomMovie = async(req,res)=>{


    try {
        res.send("<h1>Hey dude your backend is ready</h1>")
        const random_movie= new movieModel({name:"deadpool",date:["2024","03","01"],rating:8})

        await random_movie.save()

        console.log("movie creation success")


        
    } catch (error) {
        console.log("LMFAO error ",error)
    }





}

const checkQueries =async (req,res,next)=>{


    console.log('URL',getFullUrl(req))
    
    console.log('BODY',req.body);

    console.log('QUERIES',req.query)
    
    if(!isEmpty(req.params)){
        console.log('parameter is :',req.params.hot)
    }
    // res.send(`<h1>a is ${req.query.a} b is ${req.query.b}</h1>`)
    
   next()



}


const getMovieById = async(req,res)=>{



    console.log(' MOVIE CONTROLLERS :PARAMETER PASSED  =>',req.params)

    const movie =await movieModel.findOne({"name":req.params.movie_ka_naam})

    if(isEmpty(movie)){
        res.status(404).json({status:"COULD NOT FETCH",status_code:400})
    }else{

        res.status(200).json({status:"FETCH SUCCESS",reply:movie})

    }



}



export {createMovie,getAllMovies,updateMovie,deleteMovie,randomMovie,checkQueries,getMovieById}