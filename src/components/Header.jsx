import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../Context/AppContext'

function Header() {
  const {color,setColor} = useContext(AppContext)
  return (
    <div className='w-full  top-0 fixed bg-white py-4 border-b-2 text-center shadow-md border-gray-50'>
        <header >
        <h1 className='text-3xl font-bold '>WELCOME TO BLOGS!</h1>
        </header>
       
            
    </div>
  )
}

export default Header