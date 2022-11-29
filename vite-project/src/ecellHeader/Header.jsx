import React, { useEffect } from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const Header = () => {
    useEffect(
        ()=>{

            //(elementToAnimate, ObjectWithProperties)
            gsap.registerPlugin(ScrollTrigger);
            gsap.to("#box", { 
                
                x: 700,
                duration:2,
                rotation: 360,
                scrollTrigger:{
                  //             Enter leave enterback leaveback
                  //play pause resume reverse restart reset complete none
                  //toggleActions:"play pause resume complete",
                  toggleActions:"restart none none none",
                  trigger:'#box',
                  pin:true,
                  pinSpacing: false,
                  scrub:true,
                  //start:400
                  //start:'top center'
                  start:'top 60%',
                  end:"top 40%",
                  markers: true,
                  toggleClass:'bg-slate-400'
                }
              });
              
              
        },[]
    )
  return (
    <div className='relative'>
        <div className=" bg-slate-500 w-full h-[100vh]">
        
        </div>
        <div className="z-30 bg-slate-700 w-full h-[100vh]">
            <div id="box" className="w-52 h-52 bg-slate-200"></div>
        </div>
    </div>
  )
}

export default Header