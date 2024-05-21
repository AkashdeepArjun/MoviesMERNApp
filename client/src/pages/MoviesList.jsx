import { useEffect, useState } from "react"

import {addMovie,allMovies, deleteMovie} from "../api"
import { MdEdit } from "react-icons/md";

import myapis from "../api"

import "../css/moviesListStyle.css"

import { RiDeleteBin5Fill } from "react-icons/ri";
import { Link } from "react-router-dom";


//import {redirect} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'

let delete_button_style ={
    backgroundColor:"Yellow",
    color:"Red",
   
}


const MoviesList =()=>{
	

	let nav=useNavigate()


    const [movies,updateMovies]=useState([])
	
const [isMovieDeleted,setMovieDeleted]=useState(false)

        useEffect(()=>{

		
		loadData()
		setMovieDeleted(false)


        },[isMovieDeleted])

	const loadData=()=>{

		
            allMovies().then((res)=>{updateMovies(res.data.data)})
            .catch((e)=>console.log("STUPID FETCHING ERROR  HAPPENED DURING FETCH PHASE"))

	}

        const handleDelete =(event,title)=>{

            event.preventDefault()
            // if( window.confirm(`do you wanna delete  movie ${title} permanently`)){

            //     deleteMovie(title)
            //     .then((res)=>{console.log('deletion success',res.data.status_code )})
            //     .catch((e)=>{console.log('issue with deletion detected')})
            //     window.location.reload()
            // }

            deleteMovie(title.trim())
                .then((res)=>{console.log('deletion success',res.data.status_code )
                //window.location.reload()  
                
		setMovieDeleted(true)

			
		}
               )
                .catch((e)=>{console.log(e)})
               

        }

        return (

                <>
                
                
                    {/* <p>you will see list of movies </p> */}

                    <div  className="movies_container">
                  
                    {movies.map((element) => (
                              <ul key={Math.random()*10}>
                            <li >
                                <div className="manage_movie">
											
						<div className="edits">

							
                                             <RiDeleteBin5Fill  className="del_icon" onClick={(e)=>{
                                                 handleDelete(e,element.name)

                                              }}/>

                                                <Link to={`/update/${element.name}`}>

                                                    <MdEdit className='edit_icon'/>

                                                </Link>

			    			</div>

                                </div>
                           
                                <p className='movie_name'>{element.name} </p>
                                
                                <p className='movie_rating'>{element.rating}👑</p>
                                              

                            </li>
                           
                           </ul>

                    ))
                    
                    }
                
                 
                
                    </div>
                
                </>






        )




}


export default MoviesList
