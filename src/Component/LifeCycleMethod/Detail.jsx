import React,{useContext} from 'react'
import {user} from '../Api/ContextApi'
const Detail = () => {
    let name=useContext(user)
  return (
    <h1>{name}</h1>
  )
}

export default Detail