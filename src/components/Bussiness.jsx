import React from 'react'
import {features} from '../constants'
import styles,{ layout } from '../styles'
import {Button,FeatureCard} from './index';


function Bussiness() {
  return (
    <section id='features' className={layout.section} >
        <div className={layout.sectionInfo}>
          <h2 className={styles.heading2}>You do the bussiness,
            <br className='hidden sm:block ' /> we'll handle the money 
          </h2>
          <p className={`${styles.paragraph} max-w-[470px] mt-4`}>
            With the right credit card, you can improve your financial life by building credit,
            earning rewards and saving money. But with hundreads of credit on the market
          </p>
          <Button styles='mt-5'/>
        </div>

        <div className={`${layout.sectionImg} flex-col`}>
          {
            features.map((feature,index)=>(
              <FeatureCard key={feature.id} {...feature} index={index}/>
            ))
          }
        </div>
    </section>
  )
}

export default Bussiness