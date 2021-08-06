import Sales from "../../repository/Sales";

class GetSale {

  async today(sale_date: string) {
    try {
  
      return await Sales.get(sale_date)
      
    } catch (error) {
      throw new Error(error)
    }
  }

  async sumToday(sale_date: string) {
    try {
      
      return await Sales.getMoney(sale_date)

    } catch (error) {
      console.log(error)
      throw new Error(error)
    }
  }
  
}

export default new GetSale()