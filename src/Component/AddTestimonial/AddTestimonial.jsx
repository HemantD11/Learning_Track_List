import React,{useState} from 'react'
import './AddTestimonial.css'

const AddTestimonial = ({click,id,handleOpen,isOpen}) => {
  let [title, setTitle]=useState('');
  let [description, setDescription]=useState('')
  let handleSubmit=(e)=>{
    e.preventDefault()
    if(title && description){
      click({id:id+1,Title:title,Description:description,Image:[]})
      alert('Successful Added')
      setTitle('')
      setDescription('')
    }
    else{
      alert('Please Fill all the box')
    }
   
  }
  return (
    <div className="addContainer">
        <div className="add">
          <div className='cancelBtn'>
            <button onClick={()=>handleOpen(!isOpen)}>X</button>
          </div>
            <form action="">
              <div className="formfield">
                <div>
                  <label htmlFor="">Title</label>
                </div>
                <div>
                  <input type="text" placeholder='Enter Title' value={title} onChange={e=>setTitle(e.target.value)} />
                </div>
              </div>
              <div className="formfield">
                <label htmlFor="">Description</label>
                <input type="text"  placeholder='Enter Description' value={description} onChange={e=>setDescription(e.target.value)}/>
              </div>
                <div className="btn">
                    <button className='button' onClick={(e)=>handleSubmit(e)}>Add</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default AddTestimonial