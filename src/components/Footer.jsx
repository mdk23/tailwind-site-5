import React from 'react'

import styles,{layout} from '../styles'
import { logo } from '../assets';
import {footerLinks,socialMedia} from '../constants';

function Footer() {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>

        <div className='flex-1 flex flex-col justify-start mr-10'>
            <img src={logo} alt='hoobank' className='w-[266px] h-[92px] object-contain' />
            <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>
              A new way to make the payments easy, reliable and secure. 
            </p>  
        </div>

      </div> 

      <div className='flex-1.5 w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10'>
          {
              footerLinks.map(
                footerLink =>
                (
                  <div key={footerLink.title} className='flex flex-col ss:my-0 my-4 min-w-[150px]'> 
                        <h4 className='font-poppins font-medium text-[20px] text-white'>{footerLink.title}</h4>
                        <ul>
                          {
                            footerLink.links.map((link,index) =>(
                                <li key={link.name} className={`font-poppins font-normal text-[16px] leading-10
                                 text-dimWhite hover:text-secondary cursor-pointer
                                 ${index !== footerLink.links.length-1 ? 'mb-[-2px]':'mb-0'}
                                 `}> 
                                      {link.name}
                                </li>
                            ))
                          }
                        </ul>
                  </div>
               )
              )
          }
        </div>

      <div className='w-full flex justify-between md:flex-row flex-col pt-6 border-t-[2px] border-t-gray-400 mt-2'>
          <p className='font-poppins font-normal text-center text-[20px] text-white'>
            2022 💻MDK, All Rights Reserved 
          </p>

          <div className='flex flex-row md:mt-0 mt-6 items-center justify-center'>
            {
              socialMedia.map((social,index)=>(
                <img src={social.icon} alt='' key={social.id} 
                className={`w-[25px] h-[25px] object-contain cursor-pointer ${index!==socialMedia.length-1 ? 'mr-6' : 'mr-0'}`}/>
              ))
            }
          </div>
      </div>       
    </section>
  )
}

export default Footer
