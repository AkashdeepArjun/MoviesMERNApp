import { LinksUI, NavBarUi } from "../components";
import LogoUI from "../components/Logo";
import { BrowserRouter as Router,Route, Routes} from "react-router-dom";
import CreateMovie from "../pages/CreateMovie";
import MoviesList from "../pages/MoviesList";
import UpdateMovieUI from "../pages/UpdateMovie";

import {useNavigation} from 'react-router-dom'

function App() {

 //let nav = useNavigation()		
  return (
    <>
	



		      <Router>
      
		

			<NavBarUi/>

				<Routes>
				  <Route path="/" element={<MoviesList/>}/>
				  <Route path="/create_movie" element={<CreateMovie/>}/>
				  <Route path="/update/:movie_ka_naam" element={<UpdateMovieUI />}/>
				  </Routes>


		

	      
		      </Router>


		  {console.log("hi")}
      
  		

  </>

  );
}

export default App;
