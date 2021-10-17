import SalesInterface from '../../../entities';
import repository  from '../../../repository'
import { format } from 'date-fns'
const { sales: Sales } = repository;

export const createSale = async (sale: SalesInterface) => {
  try {
    const date = format(new Date(), 'MM/dd/yyyy')
    .toString()
    .replace('/','-')
    .replace('/','-')

    return await Sales.add(sale, date)
  
  } catch (error) {
    throw new Error(error);
  }
}