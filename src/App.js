import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Component/Navbar/Navbar'
import Home from './Component/Home/Home'
import Register from './Component/Forms/Register'
import Login from './Component/Forms/Login'
import Contact from './Component/Forms/Contact'
import About from './Component/Forms/About'
import { store } from './Component/Redux/Store'
import { Provider, useDispatch, useSelector } from 'react-redux'
import NotLogin from './Component/ErrorPage/NotLogin'
import LoginHandler from './Component/Forms/LoginHandler'
import WithoutNav from './Component/Main/WithoutNav'
import WithNav from './Component/Main/WithNav'
import LearningTrackList from './Component/Learning_Track/LearningTrackList'
import EnrollPage from './Component/Learning_Track/EnrollPage'
import SelectedTrack from './Component/Learning_Track/SelectedTrack'
import { Courses } from './Component/Redux/Reducer'
import CourseDetail from './Component/Learning_Track/CourseDetail'

const App = () => {
  let dispatch = useDispatch()
  let [isLogin, setIsLogin] = useState(false)
  let isOpen = useSelector(state => state).isOpen
  let handleLogin = (f) => {
    setIsLogin(f)
  }
  useEffect(() => {
    let a = fetch('https://enterpriseapi.rolai.com/content/discover?tenantId=cd2466f4-c40f-4a8e-ab92-617a1dac54ac&isUnAuth=true&resourceType=ROLE_BASED&resourceType=INDUSTRY_BASED&resourceType=SKILL_BASED').then(res => res.json()).then(data => dispatch({ type: 'trackList', data: data.data }))

    let b = fetch('https://qaleaps2demoapi.analyttica.com/track/29/tenant/da49652c-ba7d-4531-b610-a50cf856d841/unAuth').then(res => res.json()).then(data => dispatch({ type: 'courses', data: data }))

    let c = fetch('https://qaleaps2demoapi.analyttica.com/marketplace-courses/tenant/da49652c-ba7d-4531-b610-a50cf856d841/id/2').then(res => res.json()).then(data => dispatch({ type: 'coursedetail', data: data }))
  }, [])
  let TrackList = useSelector(state => state).trackList
  let Track = useSelector(state => state).Enroll
  return (

    <BrowserRouter>
      <Navbar />
      {
        isOpen && <Login handleLogin={handleLogin} />
      }
      <Routes>
        <Route path='/register' element={<Register />} />
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/tracks' element={<LearningTrackList />} />
        {TrackList.map(d => {
          return <Route path={`/tracks/${d.id}`} element={<SelectedTrack id={d.id} />} />
        })}
        <Route path='/coursedetail' element={<CourseDetail />} />
      </Routes>
    </BrowserRouter>


  )

}

export default App