import { LinksUI, NavBarUi } from "../components";
import LogoUI from "../components/Logo";
import { BrowserRouter as Router,Route, Routes} from "react-router-dom";
import CreateMovie from "../pages/CreateMovie";
import MoviesList from "../pages/MoviesList";
import UpdateMovieUI from "../pages/UpdateMovie";

import PaginatedMovies from "../pages/PaginatedMovies.jsx"

import {useNavigation} from 'react-router-dom'

function App() {

 //let nav = useNavigation()
	//

	let a=8
	let b=9
  return (
    <>
	



		      <Router>
      
		

			<NavBarUi/>

				<Routes>
				  <Route path="/" element={<MoviesList/>}/>
				  <Route path="/create_movie" element={<CreateMovie/>}/>
				  <Route path="/update/:movie_ka_naam" element={<UpdateMovieUI />}/>
				<Route path="/special" element={<PaginatedMovies/>}/>  
				
	  			</Routes>


		

	      
		      </Router>


		  {console.log("hi")}
      
  		

  </>

  );
}

export default App;
