

import { useEffect, useState } from 'react'
import '../css/CreateMovie.css'
import { addMovie, fetchMovieById ,updateMovie} from '../api'
import { useParams } from 'react-router-dom'

import { useNavigate} from 'react-router-dom'

let buttonStyle={

        padding:"3rem",
        backgroundColor:"Green",
        borderRadius:"2rem",
        fontFamily:"cursive",
        color:"white"

}
const UpdateMovieUI =()=>{

      	const navigate =useNavigate();

        const {movie_ka_naam}=useParams();
        
        let defaultDetail ={name:movie_ka_naam,time:[],rating:0}

        const [editedMovie,setMovieDetail]=useState(defaultDetail)

        const editName =(e)=>{
                setMovieDetail({...editedMovie,name:e.target.value.trim()})
        }

        const editRating =(e)=>{

                setMovieDetail({...editedMovie,rating:e.target.value.trim()})
        } 

        const updateDetails = ()=>{

                updateMovie(movie_ka_naam,editedMovie).then((res)=>{
                        
                        console.log("OH yeah success",res.data)
                        //window.alert("updation of movie success")
			navigate(-1)

                }).catch((e)=>{console.log("AT UPDATE MOVIE DETAILS ERROR ",e)})

        }

        useEffect(()=>{
                
               
               fetchMovieById(movie_ka_naam)
               .then((response)=>{
                console.log("ladies and gentlemen response is ",response.data)
                setMovieDetail({...defaultDetail,rating:response.data.reply.rating})
        })
               .catch((e)=>{console.log("UPDATE MOVIE ",e)})
                
        

        },[])
       

    return(

            <>
            
                    {/* <div> Welcome {naam} </div> */}

                    <div className="container">
                        
                        <input type="text" placeholder="movie name here" defaultValue={movie_ka_naam} onChange={(event)=>editName(event)}></input>
                        <input type='text' placeholder='movie rating here' value={editedMovie.rating} onChange={(event)=>editRating(event)}></input>
                        <button style={buttonStyle} onClick={()=>{updateDetails()}}>Update</button>





                    </div>
            
            
            
            
            
            </>



    )



}

export default UpdateMovieUI
