import React from 'react'

const Button = ({name}) => {
  return (
    <div className='px-5 py-2 m-3 rounded-lg bg-gray-200 '>
      <button>{name}</button>
    </div>
  )
}

export default Button;
