import React, { useContext, useState } from 'react'
import style from './comment.module.css'
import { useQuery ,useMutation,useQueryClient} from '@tanstack/react-query';
import { makeRequest } from '../../../axios.js';
import moment from 'moment';
import { AuthContext } from '../../context/AuthContextProvider';
const Comment = ({postId,comments}) => {
  const queryClient=useQueryClient()
  const {currentUser} =useContext(AuthContext)
  const [desc,setDesc]=useState("")
 
 const mutation=useMutation((value)=>{
    return makeRequest.post(`/comments/addcomments`,value)
 },{
   onSuccess: ()=> queryClient.invalidateQueries(["comments"])
 }
 )
 const handlepost=(e)=>{
   e.preventDefault();
   mutation.mutate({description:desc,commentUserId:currentUser.id,postId:postId})

   setDesc("")
 }
   
  return (
    <div className={style.container}>
        <div className={style.textarea}>
           <img src={currentUser.profilePic} alt="" className={style.img}/>
           <input type="text" placeholder='write a comment...' className={style.input}
           onChange={(e)=>setDesc(e.target.value)}
           value={desc}
           />
           <button className={style.btn} onClick={handlepost}>Post</button>
        </div>
      {
        comments.map((post)=>{
            return <div className={style.comment} key={post.id}>
              <div className={style.user}>
                <img src={post.profilePic} alt="" className={style.img}/>
                <span className={style.name}>{post.name}</span>
              </div>
              <div className={style.info}>
              <p className={style.desc}>{post.description}</p>
              <span className={style.date}>{moment(post?.createdAt).fromNow()}</span>
              </div>
            </div>
        })
      }
    </div>
  )
}

export default Comment
