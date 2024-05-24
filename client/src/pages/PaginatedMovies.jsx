import {getAllMoviesTiny} from "../api"

import {useEffect,useState} from "react"


import {useSearchParams} from "react-router-dom"


import "../css/moviesListStyle.css"



const PaginatedMovies =()=>{


	const [queries,setQueries]=useSearchParams()

	const [page,setPage] =useState(queries.get("page"))

	const [limit,setLimit] =useState(queries.get("limit"))

	const [movies,setMovies] =useState([])


	const loadUpMovies =()=>{


		getAllMoviesTiny(page,limit).then((res)=>{


		console.log("RETRIEVE SUCCESS",res)

		setMovies(res.data.list)

		}).catch((e)=>console.log("Eror buahahahaaa at getting list of movies :0")) 
	}

	const updateUrl=()=>{



			
	setQueries({page:page,limit:limit})

	loadUpMovies()


	}

	useEffect(()=>{


	loadUpMovies()
	


	},[])
	return(



	<>



	<h1>Welcome to PaginatedMovie</h1>

	<input type="text" placeholder="PAGE NUMBER" onChange={(e)=>e.target.value==""?setPage(1):setPage(e.target.value.trim()) }/>


	<input type="text" placeholder="RESULTS" onChange={(e)=>e.target.value==""?setLimit(10): setLimit(e.target.value.trim())} />


	<button onClick={()=>updateUrl()}>submit</button>


	<div className="movies_container">

	

	{movies.map((movie)=>(

		<ul key={Math.random()*10}>

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
