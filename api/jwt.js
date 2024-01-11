import jwt from 'jsonwebtoken'
export const getToken=(user) =>{
  const accessToken =jwt.sign({id:user.id},"access_tokenaftabalam")
  return accessToken;
}

export const verify=async(req, res,next) =>{
  // console.log("inside verify method")
  const token=req.cookies.access_Token;
  if(!token)return res.status(403).json("You are not Logged in");
  try{

    const result= jwt.verify(token,"access_tokenaftabalam")
    if(result){
    //  console.log("from verification" ,result)
      req.userId=result.id;
      next()
    }
  }catch(err){
    return res.status(403).json("Unauthorized access!")
  }
}