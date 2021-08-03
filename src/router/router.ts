import { Router } from 'express';
import { createSaleController } from '../useCases/create/createSaleController';

const router = Router();

router.post('/sale', createSaleController)

export { router }