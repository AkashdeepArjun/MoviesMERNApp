import LogoUI from "./Logo";

import LinksUI from "./Links";

import '../css/NavBarUi.css'
import gsap from "gsap";
import {useGSAP} from "@gsap/react"
import { useRef } from "react";

const NavBarUi = ()=>{
    // const anim_timeline =gsap.timeline()
    const ref_logo =useRef()



    useGSAP(()=>{
     
        gsap.to(ref_logo.current,{rotation:"360",duration:3})

    })


    return(


        <>

            <div className="container">

                    {/* <div className="navbar navbar-expand-lg navbar-dark bg-dark"> */}

                        <div>
                        <LogoUI ref={ref_logo}/>
                        <LinksUI />
                           
                           



                    </div>

                

            </div>
        
        
        
        
        
        
        
        
        </>






    )







}

export default NavBarUi