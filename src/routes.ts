import { Router } from 'express';
import { 
  getSalesController,
  createSaleController,
  deleteSalesController,
  getSalesMoneyController,
} from './useCases';
import { middlewareJwt } from './middleware';

const router = Router();

// cria um sistema de autenticação router.use(middlewareJwt)

router.get('/', getSalesController);

router.get('/sum', getSalesMoneyController);

router.post('/', createSaleController);

router.delete('/:_id', deleteSalesController);

export default router;