import React from 'react'
import ButtonsList from './ButtonsList'
import VideosContainer from './VideosContainer'

const MainContainer = () => {
  return (
    <div className='flex'>
    <ButtonsList/>
    <VideosContainer/>
    </div>
  )
}

export default MainContainer
