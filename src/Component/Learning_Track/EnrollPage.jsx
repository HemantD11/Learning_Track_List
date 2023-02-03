import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './EnrollPage.css'

const EnrollPage = ({}) => {
    let Track=useSelector(state=>state).Enroll
    let isOpen=useSelector(state=>state).isOpen
    let dispatch=useDispatch()
    
  return (
    <>
        <div className="enrollContainer">
            <div className="wrapper">
                <div className="content">
                    <h1>{Track.title}</h1>
                    <div className="career">
                        <button>Career Track</button>
                        <div className='icon'><i className="fa fa-graduation-cap"></i>{Track.description}</div>
                    </div>
                    <p>{Track.overview}</p>
                    <button className='enroll' onClick={()=>dispatch({type:'isOpen',data:!isOpen})}>Enroll</button>
                </div>
                <div className="image">
                    <img src={Track.image_url} alt="" />
                </div>
            </div>
        </div>
    </>
  )
}

export default EnrollPage