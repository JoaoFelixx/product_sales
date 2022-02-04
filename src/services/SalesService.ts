import { SalesRepository } from "../repositories";
import { SalesInterface } from "../entities";

const sales = new SalesRepository();

class SalesService {
  static async getSalesOfDay(productSalesDate: string) {
    return await sales.get(productSalesDate);
  }

  static async getMoneyOfDay(productSalesDate: string) {
    return await sales.getMoney(productSalesDate)
  }

  static async add(sale: SalesInterface) {
    return await sales.add(sale)
  }

  static async remove(_id: string) {
    return await sales.remove(_id)
  }
}

export default SalesService;