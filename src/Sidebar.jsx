import React from 'react'

function Sidebar() {
  return (
    <div className='m-3 position-fixed' >

<div className='d-flex flex-column gap-3' >
        <img className='insta-txt' src="src\assets\instagram-logo.png" alt="" />
        <div> <i className="bi bi-house-door"></i> Home</div>
        <div> <i className="bi bi-search"></i> Search</div>
        <div> <i className="bi bi-compass"></i> Explore</div>
        <div> <i className="bi bi-camera-reels"></i> Reels</div>
        <div> <i className="bi bi-chat"></i> Message</div>
        <div> <i className="bi bi-bell"></i> Notification</div>
        <div> <i className="bi bi-plus-square"></i> Create</div>
        <div> <i className="bi bi-person"></i> Profile</div>
    
    
 </div>

 <div className=' mb-3 position-fixed bottom-0 d-flex flex-column gap-3'>
    <div> <i className="bi bi-threads"></i>Thread</div>
    <div> <i className="bi bi-list"></i> More</div>

 </div>
   
   
    </div>
   
  )
}

export default Sidebar