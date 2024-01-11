import express from 'express';
import { verify } from '../jwt.js'
import { addComment,getComments,deleteComment } from '../controllers/comment.js';
const router =express.Router();

router.get('/getcomments/:postId',getComments)
router.post('/addcomments',verify,addComment)
router.delete('/deletecomments',deleteComment)

export default router;