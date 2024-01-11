import React from 'react'
import style from './stories.module.css'
const Stories = () => {
    //TEMPORARY
  const stories = [
    {
      id: 1,
      name: "John Doe",
      img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
    {
      id: 2,
      name: "John Doe",
      img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
    {
      id: 3,
      name: "John Doe",
      img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
    {
      id: 4,
      name: "John Doe",
      img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
  ];
  return (
    <div className={style.stories}>
         <div className={style.story}>
          <img src="https://cdn.pixabay.com/photo/2023/06/19/16/02/beautiful-woman-8074997_1280.jpg" alt="f" className={style.img}/>
          <span className={style.name}>Aftab Alam</span>
          <button className={style.btn}>+</button>
        </div>
      {
            stories.map((story)=>{
                return <div className={style.story} key={story.id}>
                <img src={story.img} alt="story" className={style.img} />
                <span className={style.name}>{story.name}</span>
                </div>
            })
      }
    </div>
  )
}

export default Stories
