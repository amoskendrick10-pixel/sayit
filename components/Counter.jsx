

import React from 'react'
import Button from './Button'

const Counter = ({count, onDecrement, onIncrement}) => {
  return (
    <div className='flex flex-col items-center justify-center gap-4'>
        <div>
            Counter: {count}
        </div>

        <Button
        onClick={onIncrement}
          label="Increment"
          className="bg-blue-500 text-white cursor-pointer hover:bg-blue-600 transition-colors"
        />

        <Button
        onClick={onDecrement}
         label="Decrement"
         className="bg-amber-800 text-white cursor-pointer hover:bg-amber-900 transition-colors"
        />
        
        
    </div>
  )
}

export default Counter