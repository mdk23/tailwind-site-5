import React from 'react'
import styles,{layout} from '../styles'
import {Button} from '../components';

function CTA() {
  return (
    <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} flex-col sm:flex-row
    bg-black-gradient-2 rounded-[30px] box-shadow
    `}>
      <div className='flex-1 flex flex-col'>

        <h2 className={`${styles.heading2}`}>Let's try our service now!</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-3`}>
          Everyting you need to accept car payments 
          and grow your bussiness anywhere on the planet
        </p>

      </div>

      <div className={`${styles.flexCenter} sm:ml-10 sm:mt-0 ml-0 mt-10 `}>
        <Button />
      </div>
    </section>
  )
}

export default CTA
