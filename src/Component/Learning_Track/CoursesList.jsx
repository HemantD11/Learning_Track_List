import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import './CourseList.css'

const CoursesList = () => {
    let [tab, setTab]=useState(true)
    let Navigate=useNavigate()
    let courses_id=useSelector(state=>state).Enroll
    let [courses,setCourses]=useState([])
    let [resources,setResources]=useState([])

    useEffect(()=>{
        fetch(`https://qaleaps2demoapi.analyttica.com/track/${courses_id.id}/tenant/da49652c-ba7d-4531-b610-a50cf856d841/unAuth`).then(res=>res.json()).then(data=>{setCourses(data)
        setResources(data.resource_group[0].resources)})

        // setResources(courses.resource_group[0])
    },[courses_id])
  console.log(courses_id.id);
    return (
        <>
        <div className='tab'>
            <ul>
                <li onClick={()=>setTab(true)}><a>Courses</a></li>
                <li onClick={()=>setTab(false)}><a>Projects</a></li>
            </ul>
        </div>
        
          {tab? <div className="course-tab">
            <h1>Courses</h1>
            {resources.map(d=>{
                    return d.name&&<div className="enrollContainer">
                    <div className="wrapper">
                        <div className="content">
                            <h1>{d.name}</h1>
                            <div className="career">
                                <button>Applied course</button>
                                <div className='icon'><i className="fa fa-graduation-cap"></i>3 Module</div>
                                <div className='icon'> <i className="fa fa-database"></i>9 Data Cases</div>
                                <div className='icon'><i className="fa fa-database"></i>2 Quizzes</div>
                            </div>
                            <div className="description">
                                <p>{courses.overview}</p>
                            </div>
                            <button className='enroll' onClick={()=>Navigate('/coursedetail')}>View More</button>
                        </div>
                        <div className="image">
                            <img src={courses.icon_url} alt="" />
                        </div>
                    </div>
                </div>
                })}
           </div>
           :
           <div className="project-tab">
            <h1>Projects</h1>
            {resources.map(d=>{
                        return !d.name&&<div className="enrollContainer">
                        <div className="wrapper">
                            <div className="content">
                                <h1>{d.name}</h1>
                                <div className="career">
                                    <button>Document</button>
                                    <div className='icon'><i className="fa fa-graduation-cap"></i>3 Module</div>
                                    <div className='icon'> <i className="fa fa-database"></i>9 Data Cases</div>
                                    <div className='icon'><i className="fa fa-database"></i>2 Quizzes</div>
                                </div>
                                <div className="description">
                                    <p>This applied course, first one in the series, focuses on the building blocks for any time series analysis, exposing the learner on application of different visual and statistical techniques applied on real world datasets. Upon successfully</p>
                                </div>
                                <button className='enroll'>View More</button>
                            </div>
                        </div>
                    </div>
                    })}
           </div>}
        </>
    )
}

export default CoursesList