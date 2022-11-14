import React from 'react'

function Button({styles}) {
  return (
    <button type='button' 
    className={`py-6 px-8 bg-blue-gradient font-poppins rounded-xl font-medium text-[18px] text-primary outline-none ${styles}`}>
        Get Started
    </button>
  )
}

export default Button
