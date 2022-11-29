import React from 'react'
import Card from './Card'
import bolg from '../assets/bolg.svg'

import el1 from '../assets/Ellipse 1.svg'
import el2 from '../assets/Ellipse 2.svg'
import pie from '../assets/objPeice.svg'


const Header = () => {
    return (
        <div className='h-[100vh] relative bg-slate-200 overflow-hidden'>
            <div className=" absolute origin-center flex justify-center items-center  w-[500px] h-[500px]">
                <div className=" w-[300px] h-[300px] bg-white absolute top-[80px] bolg left-[50px] rounded-[50%]"></div>
                <img src={bolg} className="-top-6 -left-6 absolute   w-[500px] h-[500px]" alt="" />
                <img src={el1} className='absolute top-0 left-[200px]' alt="" />
                <img src={el2} className='absolute top-[200px] w-[160px] left-[200px]' alt="" />
                <img src={pie} className='absolute top-[250px] left-[100px]' alt="" />
                <div className="  text-white z-10 text-5xl font-extrabold  font-[roboto] relative -top-20
                -left-10">EVENT NAME</div>
            </div>
            <div className='absolute right-0  top-36 w-[50%]'>
                <Card />
            </div>
        </div>
    )
}

export default Header