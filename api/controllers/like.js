import {db} from '../connection.js'

export const getLikes=(req,res)=>{
  
  const q="SELECT userId FROM LIKES WHERE postId=?";
  db.query(q,[req.params.postId],(err,data)=>{
        if (err) return res.status(501).send("Something went wrong!")
        const likes=data.map((like)=>{
        return like.userId
      })
        return res.status(200).send(likes);
  })
}
export const addLikes=(req,res)=>{
  console.log("from addLikes:",req.body)
   const {userId,postId} = req.body
   const q="INSERT INTO LIKES(`userId`,`postId`) VALUES(?)"
   const value=[userId,postId]
   db.query(q,[value],(err,data)=>{
     if(err) return res.send(err)
     return res.send("Post has been liked successfully!")
   })
}
export const deleteLike=(req, res) => {
  console.log("Delete like: ",req.query)
  const {userId,postId} = req.query;
  const q="DELETE FROM LIKES WHERE userId=? AND postId=?"
  db.query(q,[userId,postId],(err, data) => {
        if(err) return res.status(501).send("Something went wrong!")
        return res.status(200).send(data)
  })
}