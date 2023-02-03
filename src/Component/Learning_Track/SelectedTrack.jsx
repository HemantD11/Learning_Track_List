import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AddTestimonial from '../AddTestimonial/AddTestimonial'
import CoursesList from './CoursesList'
import EnrollPage from './EnrollPage'
import './SelectedTrack.css'

const SelectedTrack = ({id}) => {
  let TrackList=useSelector(state=>state).trackList
  let dispatch=useDispatch()
  let [isOpen, setisOpen]=useState(false)
  let handleOpen=(flag)=>{
      setisOpen(flag)
     }
  // console.log(id);
  useEffect(()=>{
    let selectedCareer=TrackList.find(data=>data.id===id)
    dispatch({type:'selectedCareer',data:selectedCareer})
  },[])
  return (
    <>
          <div className="addform">
            {
              isOpen&&<AddTestimonial  handleOpen={handleOpen} isOpen={isOpen} />
            }
         </div>
         <div className='selectedTrack'>
            <EnrollPage isOpen={isOpen} handleOpen={handleOpen}/>
        </div>
        <div className='course'>
            <CoursesList/>
        </div>
    </>
   

  )
}

export default SelectedTrack