import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Navbar.css'
import { useDispatch, useSelector } from 'react-redux'
const Navbar = ({ handleLogin }) => {
  let isLogin = useSelector(state => state).reducer
  let isOpen=useSelector(state => state).isOpen
  let dispatch = useDispatch()
  let handleLogout = () => {
    dispatch({ type: 'login', data: isLogin })
    handleLogin(!isLogin)
  }
  return (<>
    <div className="navbar">
      <h1 className='logo'>Logo</h1>
      <input type="checkbox" id="toggle" />
      <div className="link">
        <Link to='/'>Home</Link>
        <Link to='/tracks'>Tracks</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
        {!isLogin ? <><Link onClick={()=>dispatch({type:'isOpen',data:!isOpen})}>Login</Link></> : <Link to='/' onClick={handleLogout}>LogOut</Link>}
      </div>
      <label htmlFor="toggle"><i>Menu</i></label>
    </div>

  </>

  )
}

export default Navbar