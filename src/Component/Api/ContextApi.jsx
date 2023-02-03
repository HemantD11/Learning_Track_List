import React,{createContext,useState} from 'react'

export let user=createContext()
const ContextApi = ({children}) => {
    let [name,setName]=useState('Ram')
  return (
   <user.Provider value={name}>
    {children}
   </user.Provider>
  )
}

export default ContextApi