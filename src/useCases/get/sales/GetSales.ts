import repository from "../../../repository";

const { sales: Sales } = repository;

const getSales = async (sale_date: string) => {
  try {
    return await Sales.get(sale_date);

  } catch (error) {
    throw new Error(error);
  }
};

const getSalesSumToday = async (sale_date: string) => {
  try {
    return await Sales.getMoney(sale_date);

  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

export { getSales, getSalesSumToday };