import {db} from '../connection.js'
import moment from 'moment'

export const getComments=(req,res)=>{
   
     const {postId}=req.params;
     const q="SELECT U.name,U.profilePic,C.description,C.createdAt FROM COMMENTS AS C     INNER JOIN USER AS U ON U.id=C.commentUserId  WHERE postId = ? ORDER BY C.id DESC"
     db.query(q,[postId],(err,data)=>{
        if(err) return res.json("Something went wrong")
        return res.status(200).json(data)
     })
}

export const addComment=(req,res)=>{
    const {description,commentUserId,postId}=req.body;
    const q="INSERT INTO COMMENTS(`description`,`createdAt`,`commentUserId`,`postId`) VALUES(?)"
    const value=[description,moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),commentUserId,postId]
    db.query(q,[value],(err,data)=>{
        if(err) return res.json("Something went wrong!")
        res.json("Comment has been added successfully")
    })
    
}
export const deleteComment=(req,res)=>{
    
    res.send("Working......")
}