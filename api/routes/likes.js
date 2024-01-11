import express from 'express';
import { getLikes,addLikes ,deleteLike} from '../controllers/like.js';
import { verify } from '../jwt.js';
const router =express.Router();

router.get('/getlikes/:postId',getLikes)

router.post('/addlikes',verify,addLikes)
router.delete("/deletelikes",verify,deleteLike)
export default router;