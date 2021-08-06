import { Router } from 'express';

import { createSaleController } from '../useCases/create/createSaleController';
import { deleteSalesController } from '../useCases/delete/deleteSalesController';
import get from '../useCases/get/GetSalesController';

const router = Router();

router.get('/sale/:date', get.getController);

router.get('/sale/sum/:date', get.getMoneyController)

router.post('/sale', createSaleController);

router.delete('/sale/:_id', deleteSalesController);

export { router }