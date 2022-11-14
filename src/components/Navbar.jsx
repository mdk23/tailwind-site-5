import React, { useState } from 'react'
import {close,logo,menu} from '../assets';
import {navLinks} from '../constants';

function Navbar() {
  
  const[toggle,setToggle]=useState(false);

  return (
    <nav className='w-full flex py-6 justify-between items-center navbar '>
      <img src={logo} alt='hoobank' className='w-[124px] h-[52px]'/>
      
      <ul className='list-none  hidden sm:flex justify-end items-center flex-1'>
        {
          navLinks.map((nav,index)=>(
            <li key={nav.id} className={`font-poppins font-normal cursor-pointer  text-[16px]
              ${index===navLinks.length-1 ? 'mr-0' :'mr-10' } text-white`}> 
              
              <a href={`#${nav.id}`}>  {nav.title} </a> 
              
            </li>
          ))
        }
      </ul>
    

       <div className='flex flex-1 justify-end items-center sm:hidden '>
         <img src={ toggle ? close : menu} alt='menu' className='w-[28px] h-[28px] object-contain' onClick={()=>setToggle ((prev)=>!prev)}/> 

         <div className={`${toggle ? 'flex' : ' hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl `}>
            <ul className='list-none flex flex-col justify-end items-center flex-1'>
              {
                navLinks.map((nav,index)=>(
                  <li key={nav.id} className={`font-poppins font-normal cursor-pointer  text-[16px]
                    ${index===navLinks.length-1 ? 'mb-0' :'mb-5' } text-white`}> 
                    
                    <a href={`#${nav.id}`}>  {nav.title} </a> 
                    
                  </li>
                ))
              }
            </ul>
         </div> 

       </div>   


    </nav>
  )
}

export default Navbar

/**
 *  onClick={()=>setToggle ((prev)=>!prev)} esta é a forma corecta de mudar o estate do icone e nao
 *  onClick={()=>setToggle (!toggle)}
 */