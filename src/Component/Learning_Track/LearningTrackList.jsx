import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import SideBar from '../SideBar/SideBar'
import './LearningTrack.css'
const LearningTrackList = () => {
    let Navigate=useNavigate()
    let dispatch=useDispatch()
    let TrackList=useSelector(state=>state).trackList
    let handleCareer=(id)=>{
        let selectedCareer=TrackList.find(data=>data.id===id)
        dispatch({type:'selectedCareer',data:selectedCareer})
        Navigate(`/tracks/${selectedCareer.id}`)

   }

 
  return (<div className='wrapper-box'>
  
    <SideBar/>
    <div className="learningtrack">
        <div className="row">
            {TrackList.map(d=>{
                return <div className="card" key={d.id} style={{backgroundImage:`url("${d.image_url}")`}} onClick={()=>handleCareer(d.id)} >
                    <div className="container">
                        
                        <div className="content">
                            <div className="career">
                                <button>Career Track</button>
                            </div>
                            <h6>{d.title}</h6>
                            <h6>{d.overview}</h6>
                        </div>
                    </div>
                    
                </div>
            })}
        </div>
    </div>
    </div>
  )
}

export default LearningTrackList