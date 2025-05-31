import React, { useEffect, useState } from 'react'
import { useParams, Link , useNavigate, Navigate } from 'react-router-dom';
// import logo from '/src/assets/image1.jpg';

function Viewstory() {
    const {id, tot} = useParams();
    const [story, setstory] = useState(null);

    const navigate = useNavigate();

     useEffect(()=>{
            fetch(`http://localhost:3000/story/${id}`)
            .then((data)=> data.json())
            .then((data=> setstory(data)))
            .catch(err=> console.log(err))
    
        },[id]);

        if(id > tot || id <= 0 ){
            navigate('/')
        }

   
  return (
    <div>
        {story ? <div className='d-flex  justify-content-center align-items-center'> 

            <Link to={`http://localhost:5173/story/${Number(id)-1}/${tot}`}><i class="bi bi-arrow-left-circle"></i></Link>

            <img  className='vh-100' src={story.image} alt="picture" />
            
            <Link to={`http://localhost:5173/story/${Number(id)+1}/${tot}`} ><i class="bi bi-arrow-right-circle"></i></Link>
             </div> : 
             <div> Loading </div> }
    </div>
  )
}

export default Viewstory