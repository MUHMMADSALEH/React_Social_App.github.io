import express from 'express';
import { singin,singup,logout } from '../controllers/auth.js';
const router =express.Router();


router.post('/signup',singup)
router.post('/signin',singin)
router.post('/logout',logout)

export default router;