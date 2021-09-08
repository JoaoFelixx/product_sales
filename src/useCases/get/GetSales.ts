import repository from '../../repository'

const { sales: Sales } = repository

class GetSale {

  async get(sale_date: string) {
    try {
  
      return await Sales.get(sale_date)
      
    } catch (error) {
      throw new Error(error)
    }
  }

  async getSumToday(sale_date: string) {
    try {
      
      return await Sales.getMoney(sale_date)

    } catch (error) {
      console.log(error)
      throw new Error(error)
    }
  }
  
}

const { get, getSumToday } = new GetSale()

export {
  get, 
  getSumToday
}