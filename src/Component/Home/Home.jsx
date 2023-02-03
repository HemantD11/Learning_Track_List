import React,{useState,useEffect} from 'react'
import './Home.css'
import Student from '../Student_Detail/Student'
import AddTestimonial from '../AddTestimonial/AddTestimonial'
import { redirect, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
const Home = () => {
  let [isOpen,setisOpen]=useState(false)
  let [stdDetail, setStdDetail]=useState([])
  useEffect(() => {
      fetch('https://cms.analyttica.com/testimonials').then(res=>res.json()).then(data=>setStdDetail(data))
  }, []);

  let testimonial=(data)=>{
    setStdDetail([...stdDetail,data])
  }

  let handleOpen=(flag)=>{
    setisOpen(flag)
  }
  return (<>
  <div className="btn">
    <button className='button' onClick={()=>setisOpen(!isOpen)}>{isOpen?'Cancel':'Add'}</button>
  </div>
  <div className="addform">
    {
      isOpen&&<AddTestimonial click={testimonial} id={stdDetail.length} handleOpen={handleOpen} isOpen={isOpen} />
    }
  </div>
  
    <Student studentDetail={stdDetail}/>
  </>
    
  )
}

export default Home