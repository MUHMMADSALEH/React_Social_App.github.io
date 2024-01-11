import express from 'express';
import { getPosts,getPost,addPost, deletePost } from '../controllers/post.js';
import { verify } from '../jwt.js';
const router=express.Router();

router.get('/getpost',verify,getPosts)
router.get('/getpost/:id',verify,getPost)
router.post('/addpost',addPost)
router.delete('/deletepost',verify,deletePost)



export default router;