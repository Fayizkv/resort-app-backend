import { Router } from 'express';
import { createBooking, getAllBookings, getUserBookings } from '../controllers/booking.controller';
import { protect, admin } from '../middlewares/authMiddleware';

const router = Router();

router.post('/', protect, createBooking);
router.get('/', protect, admin, getAllBookings);
router.get('/my', protect, getUserBookings);

export default router;
