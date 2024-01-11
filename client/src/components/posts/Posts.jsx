import React, { useEffect, useState } from "react";
import style from "./posts.module.css";
import Post from "../post/Post";
import { makeRequest } from "../../../axios.js";
import { useQuery } from "@tanstack/react-query";
const Posts = () => {
  const {isLoading,isError,data}=useQuery(
     ["posts"],
     ()=> makeRequest.get('/posts/getpost').then((res)=>{
       return res.data;
     })
  )
  

  return (
    <div className={style.posts}>
      { isError ?
      "Something went wrong!"
      : isLoading ?
      "Loading....":data.map((post) => {
        return <Post post={post}  key={post.postId} />;
      })}
    </div>
  );
};

export default Posts;
