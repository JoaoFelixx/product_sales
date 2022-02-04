import { SalesService } from "../../services";

const getSales = async (saleDate: string) => await SalesService.getSalesOfDay(saleDate);

const getSalesSumToday = async (saleDate: string) => await SalesService.getMoneyOfDay(saleDate);

export { getSales, getSalesSumToday };