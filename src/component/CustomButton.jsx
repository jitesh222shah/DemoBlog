import React from 'react'
import './custom.css'
const CustomButton = ({lable="submit"}) => {
  return (
    <div className='mainContainer'>
        <div className='container'>
        
            <button className='btnGroup'>{lable}</button>

        </div>
    </div>
  )
}

export default CustomButton