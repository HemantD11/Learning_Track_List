import React,{useEffect,useState} from 'react'

const Hoc = (ArgComp,url) => {
  const Detail = () => {
      
            let [data,setData]=useState([]);
            useEffect(()=>{
                fetch(url).then(res=>res.json()).then(d=>setData(d))
            },[])
            return (<ArgComp data={data}/>)
  }
  return Detail
  
}

export default Hoc