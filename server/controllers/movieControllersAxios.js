import movieModel from "../models/movie_schema.js";




const createMovie =(req,res)=>{

    try {


        const body=req.body

        if(!body){
    
            res.send("<p>you must provide mode Details </p>")
    
        } else{
    
    
            const newMovie=new movieModel(body)
    
            if(!movie){
    
                res.send("<p>Error While creating movie </p>")
    
            }
    
           const response =newMovie.save().then(()=>{return res.status(200)
                                                            .json({status:"okay creation",



                                                            })

            
            
        
        }).catch(error=>{return res.status(400).json({

            status:"creation jacked "

        })})
            console.log("movie creat success!!")
    
    
        }
    



        
    } catch (error) {
        console.log(error)
    }
   

}


const updateMovieRating =async (req,res)=>{

    const body =req.body
    try{

        if(!body){
    
            res.send("<p>you must provide movie object </p>")
    
        }else{
    
    
            await  movieModel.updateOne({"name":body.name},{"rating":`${body.rating}`})
            
            console.log("upate success")
    
        }

    }catch(e){
        console.log(e)

    }
}



const deleteMovie =async(req,res)=>{


    const body =req.body
    try{

        if(!body){
    
            res.send("<p>you must provide movie object </p>")
    
        }else{
    
            await  movieModel.deleteOne({"name":req.params.target})
          
            console.log("delete success")
            res.send(200)
            req.method='GET'
            res.redirect('/')
        }

    }catch(e){
        console.log(e)

    }

}



const getAllMovies =async(res)=>{


    try {

        const enteries = await movieModel.find({},{_id:0,time:0})
    
        res.json(enteries)
    } catch (error) {
        console.log("MOVIE LOGIC LOL ",error);
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


export {createMovie,getAllMovies,updateMovieRating,deleteMovie,randomMovie}