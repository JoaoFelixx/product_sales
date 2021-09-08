import SalesInterface from '../../entities';
import repository  from '../../repository'

const { sales: Sales } = repository;

export const createSale = async (sale: SalesInterface) => {
  try {
    const date = new Date().toString().substring(4, 16);

    return await Sales.add(sale, date)
  
  } catch (error) {
    throw new Error(error);
  }
}