import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

const get = async (req: Request, res: Response): Promise<Response> => {
  const message = 'restaurant';
  return res.status(StatusCodes.OK).json({
    message,
  });
};

export const RestaurantController = {
  get,
};


