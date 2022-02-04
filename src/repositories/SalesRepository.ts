import { Sales } from '../models';
import { SalesInterface } from '../entities';

class SalesRepository {

  async get(sale_date: string) {
    return await Sales.find({ where: { sale_date } })
  }

  async getMoney(sale_date: string) {
    return await Sales.find({ where: { sale_date } });
  }

  async add(sale: SalesInterface) {
    return await Sales.create(sale)
  }

  async remove(_id: string) {
    return await Sales.destroy({ where: { _id } })
  }
}

export default SalesRepository;