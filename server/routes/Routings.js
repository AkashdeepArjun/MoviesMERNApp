// import  {getAllMovies,updateMovieRating,deleteMovie, createMovie, randomMovie} from '../controllers/movieController.js'
 import {createMovie,getAllMovies,updateMovie,deleteMovie,randomMovie ,checkQueries, getMovieById } from '../controllers/movieController.js'
import express from 'express'



const router = express.Router()   

router.get('/',checkQueries,getAllMovies)

router.post('/create_movie',createMovie)

router.get('/movie/:movie_ka_naam',getMovieById)
router.post('/random/',checkQueries,randomMovie)

// router.post('/random',randomMovie)
router.delete('/del/:title',deleteMovie)

router.put('/update/:naam',updateMovie)

export default router