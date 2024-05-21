import { useState } from 'react'
import '../css/CreateMovie.css'
import { addMovie } from '../api'
import {useNavigate} from 'react-router-dom'
const CreateMovie =()=>{

        let movie={name:"",time:[],rating:-1}

	let navigate=useNavigate()

        const [newMovie,updateMovieDetails]=useState(movie)

        const updateName =async (e)=>updateMovieDetails({...newMovie,name:e.target.value.trim()})

        const updateRating = async (e)=>updateMovieDetails({...newMovie,rating:e.target.value.trim()})


        const addNewMovie =async ()=>{

                await addMovie(newMovie).then((res)=>{

			navigate(-1)	
		}

		)
                .catch((e)=>{console.log(`buahaha movie was not added error is ${e}`)})
                

        }

    return(

            <>
            
                    {/* <div> you will see form here to make new movie </div> */}

                    <div className="container">

                        <input type="text" placeholder="movie name here" onChange={(event)=>{updateName(event)}}></input>
                        <input type='text' placeholder='movie rating here'onChange={(event)=>{updateRating(event)}}></input>
                        <button className='create-button'onClick={()=>{addNewMovie()}}>Create</button>





                    </div>
            
            
            
            
            
            </>



    )



}

export default CreateMovie
