import React from 'react'
import axios from 'axios'
const Logout = () => {
    const clickhandle=async()=>{
        try{
            const res=await axios.post('http://localhost:8800/api/auth/logout',{withCredentials: true,})
            console.log(res.data)
        }catch(err){
            console.log(err.message)
        }
    }
  return (
    <div>
      <button onClick={clickhandle}>Logout</button>
    </div>
  )
}

export default Logout
