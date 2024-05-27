import { getAllMoviesTiny } from "../api"

import { useEffect, useState } from "react"


import { useSearchParams } from "react-router-dom"


import "../css/PaginatedMovies.css"



const PaginatedMovies = () => {


  const [queries, setQueries] = useSearchParams()

  const [page, setPage] = useState(queries.get("page"))

  const [limit, setLimit] = useState(queries.get("limit"))

  const [movies, setMovies] = useState([])

const [movies_backup,updateBackup]=useState([])

const [filtered_movies,updateFilteredMovies] =useState([])

  const loadUpMovies = () => {


    getAllMoviesTiny(page, limit).then((res) => {


      console.log("RETRIEVE SUCCESS", res)

	updateBackup(res.data.list)

      setMovies(res.data.list)



    }).catch((e) => console.log("Eror buahahahaaa at getting list of movies :0"))
  }

  const updateUrl = () => {




    setQueries({ page: page, limit: limit })

    loadUpMovies()


  }


const filterMovies=(e)=>{

const user_query=e.target.value.trim()


if(user_query=="")

{
console.log("MOVIES BACKUP",movies_backup)
setMovies(movies_backup)
}else{





updateFilteredMovies(movies.filter(movie=>movie.name.toLowerCase().includes(user_query.toLowerCase())))

console.log("FILTERED MOVIES ",filtered_movies)

setMovies(filtered_movies)
}


}

  useEffect(() => {


    loadUpMovies()



  }, [])
  return (



    <>



      <h1>Welcome to PaginatedMovie</h1>
	
	<div className="container_pagination">
      <input type="text" placeholder="PAGE NUMBER" onChange={(e) => e.target.value == "" ? setPage(1) : setPage(e.target.value.trim())} />


      <input type="text" placeholder="RESULTS" onChange={(e) => e.target.value == "" ? setLimit(10) : setLimit(e.target.value.trim())} />


      <button onClick={() => updateUrl()}>submit</button>

	<input type="text" className="input_search_bar" placeholder="SEARCH MOVIES HERE......" onChange={(e)=>filterMovies(e)}/>

	  
</div>
      <div className="movies_container">




        {movies.map((movie) => (

          <ul key={Math.random() * 10}>

            <li>

              <p>{movie.name}</p>



            </li>



          </ul>

        ))}









      </div>

    </>








  )



}

export default PaginatedMovies
