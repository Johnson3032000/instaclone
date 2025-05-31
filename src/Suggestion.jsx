import React, { useEffect, useState } from 'react'

function Suggestion() {

  const [profile, setprofile] =  useState(null);
  const[suggestion, setsuggestion] = useState([])

  useEffect(()=>{
    fetch('http://localhost:3000/profile').
        then((data)=> data.json()).
        then((data=> setprofile(data))).
        catch(err=> console.log(err))

        fetch('http://localhost:3000/suggestion').
        then((data)=> data.json()).
        then((data=> setsuggestion(data))).
        catch(err=> console.log(err))

  },[])



  return (
    <div>
      <div className='suggestion m-3'>
      {profile ?

<div className='d-flex'> 
  <img className=' dp rounded-circle' src={profile.profile_picture} alt="profile pic" />
  <h5 className='uname' >{profile.username}</h5>
  <small className='ms-auto text-primary'>Switch</small>
</div>
: <p>Loading</p>  }

<div className='d-flex'>
  <p>Suggested for you</p>
  <b className='ms-auto'>See all</b>
</div>


{suggestion.length > 0? (
            <div>
                
    {suggestion.map((suggestionn)=> (
                       <div className='my-1' key={suggestionn.id} >
                        <div className='d-flex'> 
                            <img className=' dp rounded-circle' src={suggestionn.profile_picture} alt="profile pic" />
                            <h5 className='uname' >{suggestionn.username}</h5>
                            <p className='text-primary ms-auto' >Follow</p>
                        </div>
                       
           </div> 

    )) }
                
            </div>
        ):(
            <div>Loading posts</div>
        )}



</div>
      

</div>
  )
}

export default Suggestion