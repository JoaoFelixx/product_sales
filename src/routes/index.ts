import { Router } from 'express';
import { 
  createSaleController,
  deleteSalesController,
  getSalesController,
  getSalesMoneyController,
} from '../useCases';

const router = Router();

router.get('/:date', getSalesController);

router.get('/sum/:date', getSalesMoneyController)

router.post('/', createSaleController);

router.delete('/:_id', deleteSalesController);

export default router 