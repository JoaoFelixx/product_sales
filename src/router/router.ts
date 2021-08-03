import { Router } from 'express';
import { createSaleController } from '../useCases/create/createSaleController';
import { getSalesController } from '../useCases/get/getSalesController';

const router = Router();

router.get('/sale', getSalesController)

router.post('/sale', createSaleController)

export { router }