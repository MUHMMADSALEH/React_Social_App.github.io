import React, { useEffect, useState } from "react";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import style from "./profile.module.css";
import Posts from '../../components/posts/Posts'
import { useParams } from "react-router-dom";
import axios from "axios";
import Post from "../../components/post/Post";
const Profile = () => {
   const {id}=useParams()
   
   const [posts,setPost]=useState([])
   useEffect(() => {
    const fetch = async () => {
      const res = await axios.get(`http://localhost:8800/api/posts/getpost/${id}`, {
        withCredentials: true,
      });
      console.log(res.data)
      setPost(res.data);
    }; 
    fetch()
  } ,[]);
  console.log(posts)
  return (
    <div className={style.profile}>
    <div className={style.images}>
      <img
        src="https://images.pexels.com/photos/13440765/pexels-photo-13440765.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt=""
        className={style.cover}
      />
      <img
        src={posts[0]?.image}
        alt=""
        className={style.profilePic}
      />
    </div>
    <div className={style.profileContainer}>
      <div className={style.uInfo}>
        <div className={style.left}>
          <a href="http://facebook.com">
            <FacebookTwoToneIcon fontSize="large" />
          </a>
          <a href="http://facebook.com">
            <InstagramIcon fontSize="large" />
          </a>
          <a href="http://facebook.com">
            <TwitterIcon fontSize="large" />
          </a>
          <a href="http://facebook.com">
            <LinkedInIcon fontSize="large" />
          </a>
          <a href="http://facebook.com">
            <PinterestIcon fontSize="large" />
          </a>
        </div>
        <div className={style.center}>
          <span className={style.name}>{posts[0]?.name}</span>
          <div className={style.info}>
            <div className={style.item}>
              <PlaceIcon />
              <span>USA</span>
            </div>
            <div className={style.item}>
              <LanguageIcon />
              <span>{posts[0]?.name}</span>
            </div>
          </div>
          <button className={style.button}>follow</button>
        </div>
        <div className={style.right}>
          <EmailOutlinedIcon />
          <MoreVertIcon />
        </div>
      </div>
      
    </div>
    <div className={style.post}>

    {
      posts.map((post) =>{
        return <Post post={post} key={post.postId}/>
      })
    }
    </div>
  </div>
  );
};

export default Profile;
