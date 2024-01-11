import React from "react";
import style from "./rightbar.module.css";
const Rightbar = () => {
  return (
    <div className={style.rightbar}>
      <div className={style.container}>
        <div className={style.item}>
          <span>Suggestion for you</span>
          <div className={style.user}>
            <div className={style.userInfo}>
              <img
                src="https://cdn.pixabay.com/photo/2023/06/19/16/02/beautiful-woman-8074997_1280.jpg"
                alt="user"
                className={style.img}
              />
              <span>Aftab alam</span>
            </div>
            <div className={style.button}>
              <button className={style.btn1}>Follow</button>
              <button className={style.btn2}>Dismiss</button>
            </div>
          </div>
          <div className={style.user}>
            <div className={style.userInfo}>
              <img
                src="https://cdn.pixabay.com/photo/2023/06/19/16/02/beautiful-woman-8074997_1280.jpg"
                alt="user"
                className={style.img}
              />
              <span>Aftab alam</span>
            </div>
            <div className={style.button}>
              <button className={style.btn1}>Follow</button>
              <button className={style.btn2}>Dismiss</button>
            </div>
          </div>
        </div>
        <div className={style.item}>
          <span>Latest Activities</span>
          <div className={style.user}>
            <div className={style.userInfo}>
              <img
                src="https://cdn.pixabay.com/photo/2023/06/19/16/02/beautiful-woman-8074997_1280.jpg"
                alt="user"
                className={style.img}
              />
              <p className={style.p}>
                <span className={style.span}>Aftab alam</span>
                changed their cover picture
              </p>
              <span>1 min ago</span>
            </div>
          </div>
          <div className={style.user}>
            <div className={style.userInfo}>
              <img
                src="https://cdn.pixabay.com/photo/2023/06/19/16/02/beautiful-woman-8074997_1280.jpg"
                alt="user"
                className={style.img}
              />
              <p className={style.p}>
                <span className={style.span}>Afzal Javed</span>
                changed their cover picture
              </p>
              <span>1 min ago</span>
            </div>
          </div>
          <div className={style.user}>
            <div className={style.userInfo}>
              <img
                src="https://cdn.pixabay.com/photo/2023/06/19/16/02/beautiful-woman-8074997_1280.jpg"
                alt="user"
                className={style.img}
              />
              <p className={style.p}>
                <span className={style.span}>Hanain Raza</span>
                changed their cover picture
              </p>
              <span>1 min ago</span>
            </div>
          </div>
        </div>
        <div className={style.item}>
          <span>Online Friends</span>
          <div className={style.onlineUsers}>
            <div className={style.onlineUsersInfo}>
              <img
                src="https://cdn.pixabay.com/photo/2023/06/19/16/02/beautiful-woman-8074997_1280.jpg"
                alt="user"
                className={style.img}
              />

              <span>Aftab alam</span>
              <span className={style.dot}>.</span>
            </div>
            <div className={style.onlineUsersInfo}>
              <img
                src="https://cdn.pixabay.com/photo/2023/06/19/16/02/beautiful-woman-8074997_1280.jpg"
                alt="user"
                className={style.img}
              />

              <span>Afzal javed</span>
              <span className={style.dot}>.</span>
            </div>
            <div className={style.onlineUsersInfo}>
              <img
                src="https://cdn.pixabay.com/photo/2023/06/19/16/02/beautiful-woman-8074997_1280.jpg"
                alt="user"
                className={style.img}
              />

              <span>Hasnain Raza</span>
              <span className={style.dot}>.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
