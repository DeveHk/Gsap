import React from 'react'
import more from '../assets/moreArrow.svg'

const Card = ({bodytxt,heading}) => {
  return (
    <div className="p-[10%]">
        <div className="flex text-[#151414] font-semibold text-3xl mb-5">{heading || 'About the Event'} 
        <img src={more} className="ml-[2%] hover:translate-x-1 hover:-translate-y-1 hover:scale-125 duration-150" alt="" /></div>
        <div className="text-[#1C1616] text-lg w-[80%]">{bodytxt || 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis voluptates dolor natus nemo ex animi voluptate cumque culpa placeat unde!  Veritatis voluptates dolor natus nemo ex animi voluptate cumque culpa placeat unde!'}</div>
    </div>
  )
}

export default Card