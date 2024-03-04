import React from 'react'
import './style.css'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import Person2RoundedIcon from '@mui/icons-material/Person2Rounded';
import { Link } from 'react-router-dom';
const  Footer = () => {
  return (

    <>
    <div className='footer-container'>
 
        <div className='first'>
        <Link to="/home">
        <div><HomeRoundedIcon sx={{color: "#36A546", backgroundColor: '#38383880'}}/></div>
        </Link>
        </div>
 
     
        <div className='second'>
        <Link to="/employeelist">
        <div><Person2RoundedIcon sx={{color: "#36A546",  backgroundColor: '#38383880'}}/></div>
        </Link>
        </div>
        
    </div>
    </>
   
  )
}

export default  Footer