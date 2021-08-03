import { SalesInterface } from '../../entities/SalesInterface';
import Sale from '../../repository/Sales'

export async function createSale(sale: SalesInterface) {
  try {
    const date = new Date().toString().substr(4, 11);

    return await Sale.add(sale, date)
  
  } catch (error) {
    throw new Error(error);
  }
}