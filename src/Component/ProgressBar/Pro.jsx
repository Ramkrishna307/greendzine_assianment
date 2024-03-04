
import React from 'react'
import "./style.css"
const Pro = ({heading, value, max }) => {
  return (

       <div className='bar-container' >

        <div className='bar-heading'><label className='heading'>{heading}</label>
            <span className='heading'>{value}%</span></div>
           <div className="progress-bar">
            <progress value={value} max={max} />
          </div>
       </div>
        );
      }


export default Pro