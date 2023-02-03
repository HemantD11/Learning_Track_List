import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Login.css'

const Register = () => {
  let Navigate=useNavigate()
  let [name,setName]=useState('')
  let [contact,setContact]=useState('')
  let [email,setEmail]=useState('')
  let [password,setPassword]=useState('')
  let [user,setUser]=useState({})
  let [finalData,setFinalData]=useState(()=>{
    let savedData=JSON.parse(localStorage.getItem('userDetail'))
    if(savedData){
      return savedData
    }
    else{
      return []
    }
  })

  useEffect(()=>{
    localStorage.setItem('userDetail',JSON.stringify(finalData))
  },[user])

  let handleSubmit=(e)=>{
    e.preventDefault()
    setUser({name:name,contact:contact,email:email,password:password})
    setFinalData([...finalData,{name:name,contact:contact,email:email,password:password}])
    alert('SuccessFul Register')
    // Navigate('/login')
  }

  return (
    <div className='logincontainer'>
       <div className="login">
      <h1 className="header">Register</h1>
      <form action="" className=''>
       <div className="formfield">
        <div className="col ">
          <label htmlFor="">Name</label>
        </div>
        <div className="col ">
        <input type="text" className=""placeholder='Enter Your Name' onChange={e=>setName(e.target.value)} required/>
        </div>
       </div>
       <div className="formfield ">
        <div className="col ">
          <label htmlFor="">Contact</label>
        </div>
        <div className="col ">
        <input type="text" className=""placeholder='Enter Your Contact Number' onChange={e=>setContact(e.target.value)} required/>
        </div>
       </div>
       <div className="formfield ">
        <div className="col ">
          <label htmlFor="">Email</label>
        </div>
        <div className="col ">
        <input type="text" className=""placeholder='Enter Your Email' onChange={e=>setEmail(e.target.value)} required/>
        </div>
       </div>
       <div className="formfield ">
        <div className="col ">
          <label htmlFor="">Password</label>
        </div>
        <div className="col ">
        <input type="password" className=""placeholder='Enter Your Password'onChange={e=>setPassword(e.target.value)} required/>
        </div>
       </div>
       <div className="btn">
        <button className='button' onClick={(e)=>handleSubmit(e)}>Submit</button>
       </div>
       <div className='signup'>
          <Link className='' to='/'>Login</Link>
        </div>
      </form>
    </div>
    </div>
   
  )
}

export default Register