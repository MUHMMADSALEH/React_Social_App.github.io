import {db} from '../connection.js'
import moment from 'moment';
export const getPosts=(req,res)=>{
    try{
      
      const q="SELECT U.id AS userId, U.name,U.profilePic,P.postId,P.description,P.image,P.createdAt FROM USER AS U INNER JOIN POST AS P ON U.id = P.userId ORDER BY P.postId DESC";
      db.query(q,(err,data)=>{
        if(err) return res.status(401).json({status:false,message:err.message});
        return res.status(200).json(data);
      })
    }catch(err){
        return res.json({status:false,message:"Something went wrong!"});
    }
}
export const getPost=(req, res)=>{
  console.log(req.params)
  const {id}=req.params;
  try{
     const q="SELECT U.id AS userId,U.name,U.profilePic,P.postId,P.description,P.image ,P.createdAt FROM USER AS U INNER JOIN POST AS P ON U.id=P.userId WHERE U.id=?"
     db.query(q,[id],(err,data)=>{
         if(err) return res.status(403).json("Something went wrong!")
         if(!data.length==0){

           return res.status(200).json(data);
         }else{
          return res.status(404).json("No Post found!")
         }
     })
  }catch(err){
    return res.status(403).json(err.message);
  }
}
export const addPost=(req,res)=>{
    console.log("From addpost")
    console.log(req.body)
    const {desc,image_url,userId}=req.body;
    try{
       const q="INSERT INTO POST(`description`,`image`,`userId`,`createdAt`) VALUES(?)"
       const value=[desc,image_url,userId, moment(Date.now()).format("YYYY-MM-DD HH:mm:ss")]
       db.query(q,[value],(err,data)=>{
        if(err) return res.json({status:false,message:"Something went wrong!"})
        res.json({status:true,message:"Post Added successfully"})
       })
    }catch(err){
         res.json({status:false,message:err.message})
    }
}

export const deletePost=(req, res) => {
  console.log(req.body)
    const {userId,postId} = req.body
    const q="SELECT * FROM POST WHERE postId=?"
    db.query(q,[postId],(err, data) => {
       if(err) return res.json("Something went wrong!")
       if(data.length==0) return res.status(404).json("Post does not exist!")
       if(data[0].userId==userId) {
         const q2="DELETE FROM POST WHERE postId=?"
         db.query(q2,[postId],(err, data) => {
            if(err) return res.json("Something went wrong!")
            return res.json("Post has been deleted successfully!")
         })
       }else{

         res.json("You can't delete other user's posts!")
       }
      
    })
}