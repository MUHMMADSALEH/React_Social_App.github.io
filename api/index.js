import express from 'express';
import postRoute from './routes/posts.js'
import likesRoute from './routes/likes.js'
import usersRoute from './routes/users.js'
import commentsRoute from './routes/comments.js'
import authRoute from './routes/auth.js'
import cookieParser from 'cookie-parser';
import cors from 'cors'
const app = express();
app.use(cookieParser())
app.use(cors({
    // To send the cookies to clients
    origin: 'http://localhost:5173',
    credentials:true
}));
app.use(express.json())
app.use('/api/posts',postRoute)
app.use('/api/likes',likesRoute)
app.use('/api/users',usersRoute)
app.use('/api/comments',commentsRoute)
app.use('/api/auth',authRoute)
app.get('/api/test',(req, res) => {
    console.log(`MyToken2:${req.cookies.access_Token}`)
    
     res.clearCookie("access_Token",{
    secure:true,
    sameSite:'none'
  }).status(200).json("User logged out successfully")
})

app.listen(8800,()=>{
    console.log("Server is running on port number 8800" )
})