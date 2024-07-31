import React from 'react'
import Button from './Button'

const ButtonsList = () => {
  const buttonNames = [
    'All',
    'Gaming',
    'Live',
    'Cricket',
    'News',
    'Cooking',
    'Valentine',
    'Cartoon',
    "Comedy",
    "Movies",

  ];
  
  return (
    <div className="flex">
      {buttonNames.map((name, index) => (
        <Button key={index} name={name} />
      ))}
    </div>
  )
}

export default ButtonsList
