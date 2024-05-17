import React,{Component} from "react";
import styled from 'styled-components'

import logo from '../LOGO.svg'

import '../css/LogoPart.css'

const Container =styled.a.attrs({

    className:'navbar-brand',

})


const LogoUI =()=>{

return(<>

        <div className="navbar-brand logo_design">

        <img src={logo} width={50} height={50}/>

        </div>
       
  


</>)


}

export default LogoUI