import React,{Component} from "react";
import styled from 'styled-components'

import logo from '../LOGO.svg'

const Container =styled.a.attrs({

    className:'navbar-brand',

})


const LogoUI =()=>{

return(<>

        <div className="navbar-brand">

        <img src={logo} width={50} height={50}/>

        </div>
       
  


</>)


}

export default LogoUI