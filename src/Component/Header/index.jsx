import React from 'react'
import './style.css'
import HeaderIcon from '../../Assect/Header_Icon.png'
const  Header = () => {
  return (
    <div className='header-container'>
       
      <div className='img-container'>
      <img src={HeaderIcon} alt="My Image" />
      </div>
    </div>
  )
}

export default  Header