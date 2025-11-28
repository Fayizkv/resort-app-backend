import { Router } from 'express';
import { createResort, getResorts, getResortById, updateResort, deleteResort } from '../controllers/resort.controller';
import { protect, admin } from '../middlewares/authMiddleware';

const router = Router();

router.route('/')
    .get(getResorts)
    .post(protect, admin, createResort);

router.route('/:id')
    .get(getResortById)
    .put(protect, admin, updateResort)
    .delete(protect, admin, deleteResort);

export default router;
