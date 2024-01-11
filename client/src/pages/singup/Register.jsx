import React, { useState } from 'react'
import style from'./register.module.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
const Register = () => {
  const navigate=useNavigate()
  const [input,setInput]=useState({
    username:"",
    email:"",
    password:"",
    name:"",
  })
  const [error,setError]=useState(false)
  const [text,setText]=useState("")
  const handleclick=async(event)=>{
    event.preventDefault();
    const {username,email,password,name}=input
    if(username=="" || email=="" || password=="" || name==""){
      setError(true)
      setText("Please fill the fields!")
      setTimeout(() => {
        setError(false)
        setText("")
       }, 5000);
      return
    }
    const res=await axios.post('http://localhost:8800/api/auth/signup',input);
    if(res.data.status)
    {
      // The below line is for setting the input field value empty.
      // setInput({...input,username:"",password:"",email:"",name:""})
      navigate('/login')
    }else{
       setError(true)
       setText(res.data.message)
       setTimeout(() => {
        setError(false)
        setText("")
       }, 5000);
    }
  }
  return (
    <div className={style.container}>
        <div className={style.subContainer}>
        <div className={style.left}>
          <h1 className={style.title}>Aftab Social Media</h1>
          <p className={style.desc}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantiumlaboriosam quasi similique repellat dignissimos expedita ad nobis harum beatae</p>
          <span>Do you already have an account</span>
        <Link to='/login'><button className={style.btn}>Login</button></Link>
        </div>
        <div className={style.right}>
          <h1 className={style.title}>Register</h1>
          <form className={style.form}>
            <input type="text"
             placeholder="Username..."
             className={style.input}
             onChange={(e)=>setInput({...input,username:e.target.value})}
             value={input.username}
            />
            <input type="email"
             placeholder="Email..."
              className={style.input}
              onChange={(e)=>setInput({...input,email:e.target.value})}
              value={input.email}
              />
            <input type="password"
             placeholder="Password..."
              className={style.input}
              onChange={(e)=>setInput({...input,password:e.target.value})}
              value={input.password}
              />
            <input type="text"
             placeholder="Name..."
              className={style.input}
              onChange={(e)=>setInput({...input,name:e.target.value})}
              value={input.name}
              />
            { error && <span className={style.error}>{text}</span>}
            <button 
            className={style.btn}
            onClick={handleclick}
            >Register</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register
