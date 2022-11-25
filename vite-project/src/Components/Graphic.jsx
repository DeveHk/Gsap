import React, { useEffect } from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ricket from '../assets/28323F1.svg'
import char1 from '../assets/Character 1.svg'
import char2 from '../assets/Character 2.svg'
import bridge from '../assets/Bridge.svg'
import tree from '../assets/Tree.svg'
import cloid from '../assets/Background Complete.svg'



const Graphic = () => {
    useEffect(
        ()=>{
            gsap.set(['#box1','#box2','#box3','#box4','#box5','#box6'],{
                opacity:0
            })
            gsap.set('#box5',{x:-300})
            gsap.set('#box6',{y:130})
            gsap.set('#box2',{y:350})
            gsap.set(['#box3','#box4',],{x:200})
            gsap.set('#box1',{y:10})
            
            gsap.timeline().to("#box1",{opacity:1, duration:1, y:0})
            .to("#box2",{x:0,y:0, opacity:1})
            .to("#box3",{x:0,y:0, opacity:1})
            .to("#box4",{x:0,y:0, opacity:1})
            .to("#box5",{x:0,y:0, opacity:1})
            .to("#box6",{x:0,y:0, opacity:1})
            .set(['#box1','#box2','#box3','#box4','#box5','#box6'],{x:0,y:0})
            
            gsap.to("#box5",{x:20,repeat: -1,yoyo:true,duration:2})
            
            
              
        },[]
    )
  return (
    <>
    <div className='relative h-[80vh] overflow-hidden'>
       <img src={ricket} alt="" srcset="" id="box2" className='absolute h-[60%] right-[32%] bottom-24'  />
       <img src={tree} alt="" srcset="" id="box6"  className='absolute left-[5%] bottom-24'/>
       <img src={bridge} alt="" srcset="" id="box1" className='absolute w-[90%] right-[5%] bottom-24' />
       <img src={cloid} alt="" srcset="" id="box5" className='absolute  w-[80%] right-[18%] bottom-80' />
       <img src={char1} alt="" srcset="" id="box3" className='absolute  h-[25%] right-[21%] bottom-16' />
       <img src={char2} alt="" srcset="" id="box4" className='absolute h-[23%] right-[40%] bottom-20' />
       
       
    </div>
    </>
  )
}

export default Graphic