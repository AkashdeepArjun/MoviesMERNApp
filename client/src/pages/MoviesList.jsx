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


	
   const [filtered,setFiltered] =useState([])
	
const [isMovieDeleted,setMovieDeleted]=useState(false)

        useEffect(()=>{

		
		loadData()
		setMovieDeleted(false)


        },[isMovieDeleted])

	const loadData=()=>{

		
            allMovies().then((res)=>{updateMovies(res.data.data)})
            .catch((e)=>console.log("STUPID FETCHING ERROR  HAPPENED DURING FETCH PHASE"))

	}


	const filterData=(e)=>{

	console.log( "MOVIES AT BEGINING OF FILTER METHOD",movies)


	if(e.target.value.trim()==""){

		loadData()

		console.log("data is filtered")

		setFiltered([])
		

	}else {



		console.log("ORIGNAL MOVIE IS ",movies)	

		setFiltered(movies.filter(movie=>

		   movie.name.toLowerCase().includes(e.target.value.trim().toLowerCase())


	))
		console.log("JUST AFTER APPLYING FILTER",movies)	
		console.log("FILTERED ",filtered)

		updateMovies(filtered)	

}

		console.log("AFTER FILER METHOD MOVIES ARE ",movies)
		
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
				
			<div className="container_search_bar">

			<input type="text" className="input_search_bar" placeholder="SEARCH MOVIES" onChange={(e)=>filterData(e)}/>

			</div>


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
