import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Stories() {

  const[stories, setstories] = useState([]);

  const navigate = useNavigate();

  let tot =0;

  useEffect(()=>{
    fetch('http://localhost:3000/story').
    then((data)=> data.json()).
    then((data=> setstories(data))).
    catch(err=> console.log(err))
  },[])


  return (
    <div className='story d-flex'>
      <div className='d-none' >{tot = stories.length}</div>
      
      {
        stories.length > 0 ? (
          stories.map((story)=>(
            // <div style={{paddingLeft:"10px", paddingTop:"5px"}} key={story.id}> 
           
            // <img src={story.user.profile_picture}  alt="dp"  className='story_dp rounded-circle ' />
            // <p className="text-truncate" style={{width:"50px"}} >{story.user.username}</p>

            
              
            // </div>

      <div style={{ paddingLeft: "10px", paddingTop: "5px" }}  key={story.id}  onClick={()=> {navigate(`/story/${Number(story.id)}/${tot}`)}}>
  <div className="story_border">
    <img
      src={story.user.profile_picture}
      alt="dp"
      className="story_dp"
    />
  </div>
  <p className="text-truncate" style={{ width: "50px" }}>
    {story.user.username}
  </p>
</div>





          ))
        ) : (
          <p>Loding</p>
        )}

    </div>
  )
}

export default Stories