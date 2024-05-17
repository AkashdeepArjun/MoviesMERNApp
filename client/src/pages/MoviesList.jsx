import { useEffect, useState } from "react"

import {addMovie,allMovies, deleteMovie} from "../api"
import { MdEdit } from "react-icons/md";

import myapis from "../api"

import "../css/moviesListStyle.css"

import { RiDeleteBin5Fill } from "react-icons/ri";
import { Link } from "react-router-dom";

let delete_button_style ={
    color:"Yellow",
    width:50,
    height:50
}


const MoviesList =()=>{


    const [movies,updateMovies]=useState([])


        useEffect(()=>{

           

         
            allMovies().then((res)=>{updateMovies(res.data.data)})
            .catch((e)=>console.log("STUPID FETCHING ERROR  HAPPENED DURING FETCH PHASE"))




        },[])

        const handleDelete =(event,title)=>{

            event.preventDefault()
            // if( window.confirm(`do you wanna delete  movie ${title} permanently`)){

            //     deleteMovie(title)
            //     .then((res)=>{console.log('deletion success',res.data.status_code )})
            //     .catch((e)=>{console.log('issue with deletion detected')})
            //     window.location.reload()
            // }

            deleteMovie(title)
                .then((res)=>{console.log('deletion success',res.data.status_code )
                window.location.reload()    

                }
               )
                .catch((e)=>{console.log(e)})
               

        }

        return (

                <>
                
                
                    <p>you will see list of movies </p>

                    <div  className="movies_container">
                  
                    {movies.map((element) => (
                              <ul key={Math.random()*10}>
                            <li >
                            <Link to={`/update/${element.name}`}>

                                    <MdEdit/>

                            </Link>
                                <p>{element.name}</p>
                                <RiDeleteBin5Fill style={delete_button_style} className="potato edit_icon" onClick={(e)=>{
                                handleDelete(e,element.name)
                            
                                }}/>
                                
                                

                            </li>
                            <li>Movie rating:{element.rating}</li>
                           </ul>

                    ))
                    
                    }
                
                 
                
                    </div>
                
                </>






        )




}


export default MoviesList