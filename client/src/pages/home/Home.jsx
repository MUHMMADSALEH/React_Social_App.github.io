import React from 'react'
import style from './home.module.css'
import Stories from '../../components/stories/Stories'
import Posts from '../../components/posts/Posts'
import Share from '../../components/share/Share'

const Home = () => {
  return (
    <div>
     <Stories/>
     <div className={style.posts}>
      <Share/>

     <Posts/>
     </div>
    </div>
  )
}

export default Home
