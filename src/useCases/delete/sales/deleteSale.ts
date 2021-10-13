import repository from "../../../repository";

const { sales: Sales } = repository

export const deleteSale = async (_id: string) =>  {
  try {
    return await Sales.remove(_id)

  } catch(error) {
    throw new Error(error)
  }
}