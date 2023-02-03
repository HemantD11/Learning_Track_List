import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate} from 'react-router-dom'

const LoginHandler = ({children}) => {
    let Navigate=useNavigate()
    let isLogin=useSelector(state=>state).reducer
    if(isLogin)
        return children
    else{
       return(
        <>
         <h1>Please Login First</h1>
        <Link to='/'>Return To Login Page</Link>
        </>
       )
    }
}

export default LoginHandler