import React,{Component, useRef} from "react";
import styled from 'styled-components'

import logo from '../LOGO.svg'

let logo_dimensions={
width:"10rem",
height:"10rem"

}

const Container =styled.a.attrs({

    className:'navbar-brand',

})


const LogoUI =()=>{

   


return(<>

        <div >

        <img src={logo}style={logo_dimensions} />

        </div>
       
  


</>)


}

export default LogoUI