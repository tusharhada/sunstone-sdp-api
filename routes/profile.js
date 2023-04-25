import express from 'express';
import { getProfile, saveProfile } from '../controllers/profileController.js';

const router = express.Router();

router.get('/', getProfile);
router.post('/', saveProfile);

export default router;