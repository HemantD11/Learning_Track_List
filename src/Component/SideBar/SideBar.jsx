import React, { useState } from 'react'
import './Sidebar.css'

const SideBar = () => {
    let [slide,setSlide]=useState(true)
    let [btnstyle,setbtnstyle]=useState({ 
        width: '50px',
        left: '155px',
        textAlign: 'right',
        borderRadius:'0 25px 25px 0'
    })
    let handleSlide=()=>{
        console.log('hello');
        setSlide(!slide)
    }
    return (
        <div className="sidebar" style={slide?{transform: 'translateX(-155px)',width:'0px'}:{paddingRight:'40px'}}>
          <div className="sidebar-wrapper">
          <div className='filter-box'>
                <div><input type="checkbox" name="" id="" /> Automobile</div>
                <div><input type="checkbox" name="" id="" /> CSM</div>
                <div><input type="checkbox" name="" id="" /> Banking</div>
                <div><input type="checkbox" name="" id="" /> Other</div>    
           </div>
           <div className="collaps">
                <button onClick={handleSlide} style={slide?btnstyle:{}}>></button>
           </div>
          </div>
        </div>
    )
}

export default SideBar