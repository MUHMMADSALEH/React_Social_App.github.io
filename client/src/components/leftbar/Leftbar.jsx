import style from "./leftbar.module.css";
import Friend from "../../assets/friend.png";
import Group from "../../assets/2.png";
import Marketplace from "../../assets/3.png";
import Watch from "../../assets/4.png";
import Memories from "../../assets/5.png";
import Event from "../../assets/6.png";
import Gaming from "../../assets/7.png";
import Galary from "../../assets/8.png";
import Video from "../../assets/9.png";
import Message from "../../assets/10.png";
import Fundraiser from "../../assets/11.png";
import Tutorial from "../../assets/12.png";
import Course from "../../assets/13.png";
import LogoutIcon from '@mui/icons-material/Logout';
import { AuthContext } from "../../context/AuthContextProvider";
import { useContext } from "react";
import { makeRequest } from "../../../axios";
const Leftbar = () => {
  const {currentUser}=useContext(AuthContext)
  const handlelogout=async(e)=>{
    e.preventDefault();
   await makeRequest.post('/auth/logout')
    localStorage.removeItem('user')
    location.reload()
  }

  return (
    <div className={style.container}>
      <div className={style.main}>
        <div className={style.menu}>
          <div className={style.user}>
            <img
              src={currentUser.profilePic}
              alt="user"
              className={style.img}
            />
            <span>{currentUser.name}</span>
          </div>
          <div className={style.item}>
            <img src={Friend} alt="friend" className={style.img} />
            <span>Friend</span>
          </div>
          <div className={style.item}>
            <img src={Group} alt="friend" className={style.img} />
            <span>Group</span>
          </div>
          <div className={style.item}>
            <img src={Marketplace} alt="friend" className={style.img} />
            <span>Marketplace</span>
          </div>
          <div className={style.item}>
            <img src={Watch} alt="friend" className={style.img} />
            <span>Watch</span>
          </div>
          <div className={style.item}>
            <img src={Memories} alt="friend" className={style.img} />
            <span>Memories</span>
          </div>
        </div>
        <hr />
        <span>Your Shortcuts</span>
        <div className={style.menu}>
          <div className={style.item}>
            <img src={Event} alt="Event" className={style.img} />
            <span>Event</span>
          </div>
          <div className={style.item}>
            <img src={Gaming} alt="Gaming" className={style.img} />
            <span>Gaming</span>
          </div>
          <div className={style.item}>
            <img src={Galary} alt="Galary" className={style.img} />
            <span>Galary</span>
          </div>
          <div className={style.item}>
            <img src={Video} alt="Video" className={style.img} />
            <span>Video</span>
          </div>
          <div className={style.item}>
            <img src={Message} alt="Message" className={style.img} />
            <span>Message</span>
          </div>
        </div>
        <hr />
        <span>Others</span>
        <div className={style.menu}>
          <div className={style.item}>
            <img src={Fundraiser} alt="Fundraiser" className={style.img} />
            <span>Fundraiser</span>
          </div>
          <div className={style.item}>
            <img src={Tutorial} alt="Tutorial" className={style.img} />
            <span>Tutorial</span>
          </div>
          <div className={style.item}>
            <img src={Course} alt="Course" className={style.img} />
            <span>Course</span>
          </div>
          <div className={style.item}>
            <LogoutIcon/>

            <span className={style.logout} onClick={handlelogout}>Logout</span>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Leftbar;
