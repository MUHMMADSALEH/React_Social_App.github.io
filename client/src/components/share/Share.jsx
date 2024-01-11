import React, { useContext, useState } from "react";
import style from "./share.module.css";
import Image from '../../assets/img.png'
import Map from '../../assets/map.png'
import Friend from '../../assets/friend.png'
import { AuthContext } from "../../context/AuthContextProvider";
import {makeRequest} from '../../../axios.js'
import axios from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const Share = () => {
    const {currentUser} =useContext(AuthContext)
    const [image, setImage] = useState(null);
    const [desc, setDesc] = useState("");
    const queryClient=useQueryClient()
    const mutation=useMutation((newPost)=>{
     return makeRequest.post('/posts/addpost', newPost)
    },{
      onSuccess:()=> queryClient.invalidateQueries(['posts'])
    })
   const handleclick = async(e) => {
     e.preventDefault();
     const imgdata=new FormData();
     imgdata.append('file',image)
     imgdata.append('upload_preset',"myfirstpost")
     imgdata.append('cloud_name',"dmwrpcegx")
     const res=await axios.post("https://api.cloudinary.com/v1_1/dmwrpcegx/image/upload",imgdata)
     const image_url=res.data.secure_url;
     const userId=currentUser.id;
     mutation.mutate({desc,image_url,userId})
     setDesc("")
     setImage(null)
    }
  return (
    <div className={style.share}>
      <div className={style.container}>
        <div className={style.top}>
         <img src={currentUser.profilePic}alt="user" className={style.img}/>
         <input type="text"
         placeholder="what's in your mind?"
          onChange={(e)=>setDesc(e.target.value)}
          value={desc}
          className={style.input} />
        </div>
        <div className={style.bottom}>
        <div className={style.left}>
            <input
              type="file"
              id="file"
              style={{ display: "none" }}
              onChange={(e) => setImage(e.target.files[0])}
            />
            <label htmlFor="file">
              <div className={style.item}>
                <img src={Image} alt="" className={style.icon}/>
                <span>Add Image</span>
              </div>
            </label>
            <div className={style.item}>
              <img src={Map} alt=""
               className={style.icon}
               />
              <span>Add Place</span>
            </div>
            <div className={style.item}>
              <img src={Friend} alt="" 
              className={style.icon}
              />
              <span>Tag Friends</span>
            </div>
          </div>
          <div className={style.right}>
            <button className={style.btn} onClick={handleclick}>Share</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Share;
