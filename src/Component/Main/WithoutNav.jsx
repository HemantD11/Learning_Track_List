import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'

const WithoutNav = () => {
  return (
    <>
        {/* <Navbar/> */}
        <Outlet/>
    </>
  )
}

export default WithoutNav