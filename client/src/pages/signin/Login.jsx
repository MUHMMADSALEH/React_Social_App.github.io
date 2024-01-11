import React, { useContext, useState } from 'react'
import style from'./login.module.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { AuthContext } from '../../context/AuthContextProvider'
import { useNavigate } from 'react-router-dom'
const Login = () => {
  const [error,setError]=useState(false)
  const [text,setText] = useState("")
  const navigate=useNavigate()
  const {login}=useContext(AuthContext)
  const [input,setInput]=useState({
    username:"",
    password:""
  })


  const handleclick = async(event) => {
    event.preventDefault()
    if(input.password=="" && input.username==""){
      setError(true)
      setText("Please enter the information!")
      return;
    }
    if(input.username=="" ){
      setError(true)
      setText("Please enter the username!")
      return;
    }
    if(input.password=="" ){
      setError(true)
      setText("Please enter the password!")
      return;
    }
    const res=await axios.post('http://localhost:8800/api/auth/signin',input,{
      withCredentials:true
    })
   console.log(res.data)
    if(res.data.success){
      login(res.data.user)
      navigate('/')
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
        <div className={style.subcontainer}>
        <div className={style.left}>
          <h1 className={style.title}>Hello World.</h1>
          <p className={style.desc}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantiumlaboriosam quasi similique repellat dignissimos expedita ad nobis harum beatae</p>
          <span className={style.suggestion}>Don't you have an account</span>
          <Link to="/register"><button className={style.btn}>Register</button></Link>
        </div>
        <div className={style.right}>
          <h1 className={style.title}>Login</h1>
          <form className={style.form}>
            <input type="text"
             placeholder="Username..."
              className={style.input}
              onChange={(e)=>setInput({...input,username:e.target.value})}
              value={input.username}
              />
            <input type="password"
             placeholder="Password..."
              className={style.input}
              onChange={(e)=>setInput({...input,password:e.target.value})}
              value={input.password}
              />
              {error && <span className={style.error}>{text}</span>}
            <button className={style.btn} onClick={handleclick}>Login</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
