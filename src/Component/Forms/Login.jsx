import React,{useState} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import './Login.css'
import {Link,useNavigate} from 'react-router-dom'

const Login = ({handleLogin}) => {
  let isLogin=useSelector(state=>state).reducer
  let isOpen=useSelector(state=>state).isOpen
  let dispatch=useDispatch()
  let Navigate=useNavigate()
  const [email, setEmail]=useState('')
  const [psw, setpsw]=useState('')
  const [user, setuser]=useState([
    {email:'user1@gmail.com', psw:'123'},
    {email:'user2@gmail.com', psw:'123'},
    {email:'user3@gmail.com', psw:'123'},
    {email:'user4@gmail.com', psw:'123'},
    {email:'user5@gmail.com', psw:'123'},
    {email:'user6@gmail.com', psw:'123'},
    {email:'user7@gmail.com', psw:'123'},
    {email:'user8@gmail.com', psw:'123'}
  ])

  let handleSubmit=(e)=>{
    e.preventDefault()
    let log= user.find(cr=>
      (cr.email===email && cr.psw===psw)
    )
    if(log){
      dispatch({type:'login',data:isLogin})
      handleLogin(!isLogin)
      dispatch({type:'isOpen',data:!isOpen})
      // Navigate('/home')
    }
    else{
      alert('Invalid Email/Password')
    }
  }
  return (
   
    <div className='logincontainer addContainer'>
    <div className="login">
    
            <button onClick={()=>dispatch({type:'isOpen',data:!isOpen})} className='btn-cancel'>X</button>
          
      <h1 className='header'>Login</h1>
      <form className=''>
        <div className='formfield'>
          <div className="col">
            <label htmlFor="">Email</label>
          </div>
          <div className="inputField">
            <input type="text" className="" placeholder='Enter Your Email' onChange={e=>setEmail(e.target.value)} /> 
          </div>
        </div>
        <div className='formfield'>
          <div className="col">
            <label htmlFor="">Password</label>
          </div>
          <div className="inputField">
            <input type="password" className="" placeholder='Enter Your Password' onChange={e=>setpsw(e.target.value)} /> 
          </div>
        </div>
        <div className="btn">
          <button className="button" onClick={(e)=>handleSubmit(e)}>Login</button>
        </div>
        <div className='signup'>
          <Link className='' to='/register'>Sign-Up</Link>
        </div>
      </form>
    </div>
    </div>
  
  )
}

export default Login