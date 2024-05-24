// import  {getAllMovies,updateMovieRating,deleteMovie, createMovie, randomMovie} from '../controllers/movieController.js'
 import {createMovie,getAllMovies,updateMovie,deleteMovie,randomMovie ,checkQueries, getMovieById ,getAllMoviesTinyEdition} from '../controllers/movieController.js'
import express from 'express'



const router = express.Router()   

router.get('/',getAllMovies)

router.post('/create_movie',createMovie)

router.get('/movie/:movie_ka_naam',getMovieById)
router.post('/random/',checkQueries,randomMovie)

// router.post('/random',randomMovie)
router.delete('/del/:title',deleteMovie)

router.put('/update/:naam',updateMovie)

router.get('/special',checkQueries,getAllMoviesTinyEdition)

export default router
