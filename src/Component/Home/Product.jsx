import React,{useState,useEffect} from 'react'
import Hoc from '../HOC/Hoc';

const Product = ({data}) => {
    const prod=data;
    const [color, setcolor]=useState('red')
    const [imgStyle,setImgStyle]=useState({})
    const [image,setImage]=useState('')
    // useEffect(() => {
    //     axios.get('https://fakestoreapi.com/products').then(a=>a.data).then(a=>setProd(a))
    // }, []);
    let handleFav=(id)=>{
        if(color==='red'){
            setcolor('white')
        }
        else{
            setcolor('red')
        }
    }

    let handleImage=(id)=>{
        let newImage=prod.find(d=>d.id===id)
        setImage(newImage.image)
        setImgStyle({
            position:'fixed',
            top:'10%',
            left:'41%',
            width:"300px",
            
            
        })
    }
  return (
    <div className="container my-5">
        <div className="row">
                    {prod!=null?prod.map(el=>{
                        return <div className="col my-5" key={el.id}>
                            <div className="card d-flex flex-row shadow " style={{height:'200px'}}>
                                <div className='d-flex'>
                                    <span className='heart' onClick={()=>handleFav(el.id)} style={{color:color}}><i className="fa fa-heart"></i></span>
                                    <img src={el.image} alt="" className='border rounded' width='150px' onClick={()=>handleImage(el.id)}/>
                                </div>
                                <div className='mx-3'>
                                    <p>{el.title}</p>
                                    <h6>{el.price}</h6>
                                </div>
                            </div>
                        </div>
                    }):''}
        </div>

        <div className='' style={{backgroundColor:'black'}}>
            <img src={image} alt="" style={imgStyle}/>
        </div>
    </div>
  )
}
let NewComponent=Hoc(Product,'https://fakestoreapi.com/products')
export default NewComponent