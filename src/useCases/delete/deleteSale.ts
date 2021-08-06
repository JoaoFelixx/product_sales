import Sales from "../../repository/Sales";

export async function deleteSales(_id) {
  try {

    return await Sales.remove(_id)

  } catch(error) {
    throw new Error(error)
  }
}