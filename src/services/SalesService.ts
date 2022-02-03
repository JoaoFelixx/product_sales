import { SalesRepository } from "../repository";
import { SalesInterface } from "../entities";

const sales = new SalesRepository();

class SalesService {
  static async getSalesOfDay(productSalesDate: string) {
    return await sales.get(productSalesDate);
  }

  static async getMoneyOfDay(productSalesDate: string) {
    return await sales.getMoney(productSalesDate)
  }

  static async add(sale: SalesInterface, productSalesDate: string) {
    return await sales.add(sale, productSalesDate)
  }

  static async remove(_id: string) {
    return await sales.remove(_id)
  }
}

export default SalesService;