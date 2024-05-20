import LogoUI from "./Logo";

import LinksUI from "./Links";

import '../css/NavBarUi.css'
import gsap from 'gsap'
import {useGSAP} from '@gsap/react'
import { useRef } from 'react'

const NavBarUi = ()=>{
     const anim_timeline =gsap.timeline()
    const potato =useRef();

   const links_ref =useRef(); 

	//gsap.registerPlugin(useGSAP);
    useGSAP(()=>{
     
        anim_timeline
	.to(potato.current,{rotation:"+=360",duration:3})
	.to(links_ref.current,{rotation:"-=360",duration:3})

    });
    return(
        <>

            <div className="container">

                    {/* <div className="navbar navbar-expand-lg navbar-dark bg-dark"> */}

                        <div>
	    			<div ref={potato}><LogoUI/></div>
			   
				<div ref={links_ref}><LinksUI/></div>
                    </div>

            </div>
        
        
        
        </>
    )

}

export default NavBarUi
