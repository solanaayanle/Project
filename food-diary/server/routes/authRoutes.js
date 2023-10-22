import { Router } from 'express';
import authController from '../controllers/authController.js';

const router = Router();
router.post('/loginUser', authController.loginUser);

export default router;