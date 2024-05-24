import react from 'react'

import {createSearchParams} from 'react-router-dom'

import {Link} from 'react-router-dom'

import '../css/Links.css'

let heading_style={
    color:"white"
}

const LinksUI =()=>{


return(<>
    

  
        <Link to='./' className='navbar-brand' style={heading_style}>

            MyFirst MERN APP

        </Link>
    
    
                    {/* COLLAPSE */}
        <div className='collapse navbar-collapse' >

                    {/* LIST */}
            <div className='navbar-nav mr-auto'>

                    {/* ITEM -1  */}
                <div className='collapse navbar-collapse palm'>

                    <Link to='/' className='nav-link'>MOVIES LIST </Link>

                </div>

                  <div className='collapse navbar-collapse palm'>

                    <Link to='/create_movie' className='nav-link'>CREATE MOVIE</Link>

                </div>

		

			
                  <div className='collapse navbar-collapse palm'>

                    <Link to={{

			pathname:"/special",
			search:`?${createSearchParams({page:1,limit:10})


		    }`}} className='nav-link'>PAGINATED MOVIES</Link>

                </div>



            </div>


        </div>


</>)


}


export default LinksUI
