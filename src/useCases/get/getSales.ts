import Sales from "../../repository/Sales";

export async function getSale(sale_date) {
  try {

    return await Sales.get(sale_date)
    
  } catch (error) {
    throw new Error(error)
  }
}