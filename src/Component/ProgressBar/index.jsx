import React, { useState } from 'react'
import "./style.css"
import Pro from './Pro';
import Heading from '../Heading';
const  ProgressBar = () => {

    const [value, setValue] = useState(150);
  return (
    <div className='bar-container main-container-bar'>
          <Heading />
    <Pro heading={"Productivity on Monday"} value={value} max={200}  />
    <Pro heading={"Productivity on Tueday"} value={60} max={200}  />
    <Pro heading={"Productivity on Wednesday"} value={120} max={200}  />
    <Pro heading={"Productivity on Thursday"} value={40} max={200}  />
    <Pro heading={"Productivity on Friday"} value={190} max={200}  />
    <Pro heading={"Productivity on Saturday"} value={190} max={200}  />
  </div>
  )
}

export default  ProgressBar