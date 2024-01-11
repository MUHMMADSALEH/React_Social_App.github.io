import {db} from '../connection.js'
import bcrypt from 'bcrypt'
import { getToken } from '../jwt.js'

// Register
export const singup=(req,res)=>{

    const {username,password,email,name}=req.body
    const q2=`SELECT * FROM USER WHERE USERNAME=?`
    db.query(q2,[username],(err,data)=>{
        if(err)return res.json({status:false,message:err.message})
        if(data.length){
            return res.json({status:false,message:"User already exists!"});
        }else{

          const q="INSERT INTO USER(`USERNAME`,`EMAIL`,`PASSWORD`,`NAME`)VALUES(?)"
          const salt=bcrypt.genSaltSync(10);
          const hash=bcrypt.hashSync(req.body.password, salt)
          const value=[username,email,hash,name]
          db.query(q,[value],(err,data)=>{
              if(err)return res.json({status:false,message:err.message})
              return res.json({status:true,message:"User has been created successfully!"})
          })
        }
    })
}

// Login.
export const singin=(req,res)=>{

  const {username,password} = req.body
  const q="SELECT * FROM USER WHERE username=?"
  db.query(q,[username],(err,data)=>{
    if(err)return res.status(500).json({ success: false, message: "An error occurred, please try again later." });
    const user=data[0];
    // console.log("Fetched user: " , user)
    if(data.length===0) return res.json({status:false,message:"User does not exist!"})
    const isCorrect =bcrypt.compareSync(password,user.password);
    if(isCorrect){
      const token=getToken(user);
       const {password,...others}=user
      return res.cookie("access_Token",token,{httpOnly:false})
      .status(200).json({success:true,user:others})
    }else{
      return res.json({success:false,message:"Password is incorrect!"})
    }
  })
}
// Logout.
export const logout=(req,res)=>{
    
  res.clearCookie("access_Token",{
 secure:true,
 sameSite:'none'
}).status(200).json("User logged out successfully")
}