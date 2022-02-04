import { SalesInterface } from '../../entities';
import { SalesService } from '../../services';

const createSale = async (sale: SalesInterface) => await SalesService.add(sale);

export default createSale;