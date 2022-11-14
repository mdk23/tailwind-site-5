import React from 'react'
import {clients} from '../constants'
import styles,{layout} from '../styles'

function Clients() {
  return (
    <section className={`${styles.flexCenter } my-4`}>
       <div className={`${styles.flexCenter} flex-wrap  w-full`}>
          {
            clients.map(client=>(
              <div key={client.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[120px] hover:bg-dimWhite hover:p-2 hover:rounded-xl`}>
                  <img src={client.logo} alt='client' className='sm:w-[192px] w-[100px] object-contain hover:white__gradient'/>
              </div>
            ))
          }
       </div>
    </section>
  )
}

export default Clients
