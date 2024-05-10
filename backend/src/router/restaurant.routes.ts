import { Router } from 'express';
import { RestaurantController } from '../controllers/restaurant.controller';

const restaurantRouter = Router();

restaurantRouter.get('/', RestaurantController.get);

export default restaurantRouter;
