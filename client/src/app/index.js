import { LinksUI, NavBarUi } from "../components";
import LogoUI from "../components/Logo";
import { BrowserRouter as Router,Route, Routes} from "react-router-dom";
import CreateMovie from "../pages/CreateMovie";
import MoviesList from "../pages/MoviesList";
import UpdateMovieUI from "../pages/UpdateMovie";


function App() {
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
      
    </>
  );
}

export default App;
