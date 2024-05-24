import {getAllMoviesTiny} from "../api"

import {useEffect,useState} from "react"


import {useSearchParams} from "react-router-dom"



const PaginatedMovies =()=>{


	const [queries,setQueries]=useSearchParams()

	const [page,setPage] =useState(queries.get("page"))

	const [limit,setLimit] =useState(queries.get("limit"))



	const updateUrl=()=>{



			
	setQueries({page:page,limit:limit})


	}

	useEffect(()=>{

	
	
	getAllMoviesTiny(page,limit)


	},[])
	return(



	<>



	<h1>Welcome to PaginatedMovie</h1>

	<input type="text" placeholder="PAGE NUMBER" onChange={(e)=>e.target.value==""?setPage(1):setPage(e.target.value.trim()) }/>


	<input type="text" placeholder="RESULTS" onChange={(e)=>e.target.value==""?setLimit(10): setLimit(e.target.value.trim())} />


	<button onClick={()=>updateUrl()}>submit</button>
	

	</>
	







	)



}

export default PaginatedMovies
