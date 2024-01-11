import React, { useContext, useState } from "react";
import style from "./post.module.css";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Comment from "../comments/Comment";
import { Link } from "react-router-dom";
import moment from 'moment'
import { makeRequest } from "../../../axios.js";
import { useQuery,useMutation ,useQueryClient} from "@tanstack/react-query";
import { AuthContext } from "../../context/AuthContextProvider";
const Post = ({ post }) => {
  const queryClient=useQueryClient()
  const {currentUser}=useContext(AuthContext)
  const [openComment,setOpenComment]=useState(false)

  const {isLoading,data}=useQuery(
    ["likes",post.postId],
    ()=> makeRequest.get(`/likes/getlikes/${post.postId}`).then((res)=>{
      return res.data;
    })
 )
 const commentQuery=useQuery(
  ["comments",post.postId],
  ()=> makeRequest.get(`/comments/getcomments/${post.postId}`).then((res)=>{
    return res.data;
  })
)
 const clickMutation=useMutation((value)=>{
      if(value) return makeRequest.delete(`likes/deletelikes?userId=${currentUser.id}&&postId=${post.postId}`);
      return  makeRequest.post('likes/addlikes',{userId:currentUser.id, postId:post.postId})
     
 },{
  onSuccess:(data)=>{queryClient.invalidateQueries(['likes']) 
    console.log("data return by api:",data)},
  
 })
 
const handlelike=()=>{
  
  clickMutation.mutate(data.includes(currentUser.id))
}  

  return (
    <div className={style.container}>
      <div className={style.user}>
      <Link to={`/profile/${post.userId}`} className={style.link}>
        <div className={style.userInfo}>
          <img src={post.profilePic} alt="" className={style.img} />
          <div className={style.details}>
            <span>{post.name}</span>
            <span>{moment(post?.createdAt).fromNow()}</span>
          </div>
        </div>
        </Link>
        <div>
          <span className={style.bar}>...</span>
        </div>
      </div>
      <div className={style.content}>
      <p className={style.text} aria-readonly>{post.description}</p>
      <img src={post.image} alt="" className={style.image}/>
      </div>
      <div className={style.info}>
       <div className={style.item}>
       {data?.includes(currentUser.id) ? <FavoriteOutlinedIcon className={style.like} onClick={handlelike} /> : <FavoriteBorderOutlinedIcon onClick={handlelike} />}
       {data? data.length:0} likes
       </div>
       <div className={style.item} onClick={()=>setOpenComment(!openComment)} style={{cursor: 'pointer'}}>
       <TextsmsOutlinedIcon />
        {commentQuery.isLoading?"loading..": commentQuery.data?.length}  Comments
       </div>
       <div className={style.item}>
       <ShareOutlinedIcon />
            Share
       </div>
      </div>
       {openComment && <Comment postId={post.postId} comments={commentQuery.data}/>}
    </div>
  );
};

export default Post;
