

import React from 'react'

const Button = ({label, className, onClick}) => {
  return (
    <button 
      className={`${className} rounded-full py-2 px-6`}
      onClick={onClick}
    >
        {label}
    </button>
  )
}

export default Button