import React from 'react'
import {stats} from '../constants'
import styles from '../styles'


function Stats() {
  return (
    <section className={`${styles.flexCenter} flex-row flex-wrap mb-6 sm:mb-20`}>
      {
        stats.map( (stat)=>(
          <div key={stat.id} className='flex-1 flex justify-start items-center flex-row m-3'>
            
            <h4 className='font-poppins font-semibold xs:text-[40px] text-[30px]
              xs:leading-[53px] leading-[43px] text-white'>
                {stat.value}
            </h4>
             
             <p className='font-poppins font-normal xs:text-[25px] text-[20px] 
             xs:leading-[30px] leading-[25px] text-gradient uppercase ml-3'> 
             {stat.title}
             </p> 
          </div>
        ))
      }
    </section>
  )
}

export default Stats
