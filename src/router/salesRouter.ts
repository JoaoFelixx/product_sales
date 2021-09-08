import { Router } from 'express';
import { 
  getController,
  getMoneyController,
  createSaleController,
  deleteSalesController,

} from '../useCases';

const router = Router();

router.get('/:date', getController);

router.get('/sum/:date', getMoneyController)

router.post('/', createSaleController);

router.delete('/:_id', deleteSalesController);

export default router 