import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';


const Header = () => {
  const dispatch = useDispatch();
  const toggleMenuHandler =()=>{
    dispatch(toggleMenu());
  }
  return (
    <div className='grid grid-flow-col p-4 m-2 shadow-lg'>
        <div className='flex col-span-1'>
            <img
            onClick={()=>toggleMenuHandler()}
            className='h-8 cursor-pointer'
            src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp&w=256" alt="menu" />
            <a href="/">
            <img
            className='h-8 mx-3'
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png" alt="youtube-logo" />
            </a>
        </div>
        <div className='col-span-10 pl-20'>
            <input className='w-1/2 border p-2 border-gray-400 rounded-l-full ' type="text" />
            <button className='border px-5 py-2 border-gray-400 rounded-r-full bg-gray-100'>🔍</button>
        </div>
        <div className='col-span-1'>
            <img 
            className='h-8'
            src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" alt="" />
        </div>
    </div>
  )
}

export default Header