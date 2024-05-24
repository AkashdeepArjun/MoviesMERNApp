import axios from 'axios'


const myapi =axios.create({

    baseURL:"http://localhost:3000"
})



 const addMovie = (payload)=>myapi.post('/create_movie',payload)
 const allMovies = ()=>myapi.get('/')

 const deleteMovie =(title)=>myapi.delete(`/del/${title}`)

const updateMovie =(naam,payload)=>myapi.put(`/update/${naam}`,payload)

const fetchMovieById = (movie_ka_naam)=>myapi.get(`/movie/${movie_ka_naam}`)             

const getAllMoviesTiny =(p=1,l=10)=>myapi.get('/special',{params:{page:p,limit:l}})

export {addMovie,allMovies,deleteMovie,updateMovie,fetchMovieById,getAllMoviesTiny}


