import { Router } from 'express';
import { 
  getSalesController,
  createSaleController,
  deleteSalesController,
  getSalesMoneyController,
} from './useCases';
import { middlewareJwt } from './middleware';

const router = Router();

// cria um sistema de autenticaçao  router.use(middlewareJwt)

router.get('/:date', getSalesController);

router.get('/sum/:date', getSalesMoneyController);

router.post('/', createSaleController);

router.delete('/:_id', deleteSalesController);

export default router;