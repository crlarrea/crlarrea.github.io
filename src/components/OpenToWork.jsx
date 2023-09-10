import React from 'react'
import {BsFillCircleFill} from 'react-icons/bs'
export const OpenToWork = ({props:{colour}}) => {
  return (
    <div className='open-to-work'>
        <BsFillCircleFill color={colour}/>
        <span>open to work</span>
    </div>
  )
}
