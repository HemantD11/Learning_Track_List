import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import './CourseDetail.css'

const CourseDetail = () => {
  let [tab,setTab]=useState({about:true,timeline:false,assesment:false})
  let [active,setActive]=useState({about:'2px solid yellow',timeline:'',assesment:''})
  let course = useSelector(state => state).courseDetail
  return (<>    <div className='course-detail'>
    <div className='course-content'>
      <h1>{course.title}</h1>
      <p>{course.description}</p>
      <div className="career">
        <button>Applied course</button>
      </div>
    </div>

    <div className="enroll-card">
      <div className="back-img">
        <img src={course.background_image} alt="" />
      </div>
      <div className="course-doc">
        <div className="icon">

          <div className='icon'><i className="fa fa-graduation-cap"></i>{course.modules_count}Module</div>
          <div className='icon'> <i className="fa fa-database"></i>{course.simulations_count}Data Cases
          </div>

          <div className='icon'><i className="fa fa-cube"></i>{course.quizzes_count}Quizzes</div>
          <div className='icon'><i className="fa fa-file"></i>1 Cerificate</div>


        </div>
        <div className="enrollbtn">
          <button className='enroll'>Enroll</button>
        </div>
      </div>
    </div>
  </div>
    <div className="overview">
      <div className="overview-tab">
        <ul>
          <li id='about' onClick={(e)=>setTab({about:true,timeline:false,assesment:false})} style={{borderBottom:tab.about? '2px solid yellow':''}}><a>About The Course</a></li>
          <li id='timeline'onClick={(e)=>setTab({about:false,timeline:true,assesment:false})} style={{borderBottom:tab.timeline? '2px solid yellow':''}}><a>Timeline View</a></li>
          <li id='assesment' onClick={(e)=>setTab({about:false,timeline:false,assesment:true})} style={{borderBottom:tab.assesment?'2px solid yellow':''}}><a>Assessment Criteria</a></li>
        </ul>
      </div>
      {tab.about&&<div className="about-course">
        <h4>Overview :</h4>
        <p>Linear regression is perhaps one of the most popular and widely used algorithms in statistics
          and machine learning.
          This course is designed to guide a learner through the various stages of a predictive modelling 
          framework. Linear Regression is the most fundamental form of regression, and a very common and 
          widely used predictive technique in the field of analytics.
          Through an experiential learning approach, the course will take you through the concepts of 'Simple 
          and Multiple Linear Regression' and the various nuances involved in the building of a robust 
          predictive analytical solution,</p>
        <ul>
          <li>Evaluating a Linear Model</li>
          <li>Variable Selection</li>
          <li>Variable Transformation</li>
          <li>Over-fitting</li>
          <li>Model Validation</li>
        </ul>
      </div>}



     {tab.timeline&&<div className="timeline-view">
        <ol>
          <li><div>Module 01 : Introduction to Data Visualization and Smoothing of Time Series
              Introductory concept of time series data - summarizing and viewing time series data, smoothing</div></li>
          <li><div>Module 02 : Introduction to Decomposition of Trend and Seasonal Component
              Concept of classical time series models - calculate and remove seasonal component, trend</div></li>
          <li><div>Module 03 : Introduction to ACF and PACF of Time Series Data
              Identify the presence of any trend and seasonal component in the data through ACF and PACF</div></li>
          <li><div>Certificate will be awarded</div></li>
        </ol>
      </div>}



      {tab.assesment&&<div className="Assessment-Criteria" >
        <p>Your performance in this applied course drives your grading and eligibility to get a certificate,
          up on your successful completion of the course. To increase your chances to get a certificate, make 
          sure to attempt all Data Cases and Quizzes, post completing the content collateral that cover the 
          explained concepts.
          Unlike other assessment frameworks, LEAPS takes into account your understanding of the covered concepts,
          their successful application on the contextual Data Cases and attempt of the quizzes. The algorithm 
          driven assessment engine takes into account your learning journey throughout the course, your 
          approach to apply covered concepts on Data Cases and the quiz attempts, to calculate your score 
          and decide on the certificate eligibility.
          Happy Learning by Doing!</p>
      </div>}
    </div>
  </>

  )
}

export default CourseDetail