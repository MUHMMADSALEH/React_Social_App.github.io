import React, { useContext } from 'react'
import style  from './navbar.module.css'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';

import LogoutIcon from '@mui/icons-material/Logout';
import { AuthContext } from '../../context/AuthContextProvider';
import { Link } from 'react-router-dom';
const Navbar = () => {
  const {currentUser} = useContext(AuthContext)
  return (
    <div className={style.container}>
      <div className={style.left}>
        <Link to="/" style={{textDecoration:"none",cursor:"pointer"}}>
       <span className={style.name}>Social Media</span>
        </Link>
       <HomeOutlinedIcon/>
       <DarkModeOutlinedIcon/>
       <GridViewOutlinedIcon/>
       <div className={style.SearchContainer}>
        <SearchOutlinedIcon/>
        <input type="text" placeholder='Search....'
        className={style.search}
        />
       </div>
      </div>
      <div className={style.right}>
      <PersonOutlineOutlinedIcon/>
      <EmailOutlinedIcon/>
      <NotificationsOutlinedIcon/>
      <div className={style.user}>
        <img src={currentUser.profilePic} alt="girl" className={style.img}/>
        <span className={style.username}>{currentUser.name}</span>
      </div>
      </div>
    
    </div>
  )
}

export default Navbar
