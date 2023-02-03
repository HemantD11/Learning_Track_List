import React,{useEffect,useState} from 'react'
import './Student.css'

const Student = ({studentDetail}) => {
   
  return (
    <div className="main">
        <div className="row">
            {studentDetail.map((el)=>{
                return <div className='col' key={el.id} >
                    <div className="card" style={{height:'300px'}}>
                        <div className='image'>
                            {el.Image[0]&&<img className='profile' src={`https://cms.analyttica.com${el.Image[0].url}`}  alt="" />}
                        </div>
                        <div className='detail'>
                            <p><b>ID : </b>{el.id}</p>
                            <p><b>Title : </b>{el.Title}</p>
                            <p className='description'><b>Description : </b>{el.Description}</p>
                        </div>
                    </div>
                </div>
            })}
        </div>
    </div>
  )
}

export default Student