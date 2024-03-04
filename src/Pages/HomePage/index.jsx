import React from 'react'
import './style.css'
import Header from '../../Component/Header'
import Footer from '../../Component/Footer'
import Logo from '../../Component/Logo'
import Heading from '../../Component/Heading'
import ProgressBar from '../../Component/ProgressBar'
const  Home = ({employees}) => {
  return (
  <>
   <Header/>
    <Logo value={employees.length} />
    <div className='home-container'>
    <ProgressBar/>
    <Footer/>
 </div>
  </>
  )
}

export default  Home