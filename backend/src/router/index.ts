import { Router } from 'express';
import restaurantRouter from './restaurant.routes';

const router = Router();

router.use('/restaurant', restaurantRouter);

export default router;
