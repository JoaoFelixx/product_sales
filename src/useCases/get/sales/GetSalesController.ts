import { Request, Response } from "express";
import { getSales, getSalesSumToday } from "./GetSales";

const isEmptyData = (data) => data.length > 0 ? false : true; 

const getSalesController = async (request: Request, response: Response): Promise<Response> => {
  if (!request.params.date) 
    return response.status(400).json({ result: 'Bad request, `date` is missing' });
  
  try {
    const [data] = await getSales(request.params.date);

    if (isEmptyData(data)) return response.sendStatus(204)
      
    return response.status(200).json({ result: [data] });

  } catch (error) {
    return response.sendStatus(400);
  }
}

const getSalesMoneyController = async (request: Request, response: Response): Promise<Response> => {
  if (!request.params.date) 
    return response.status(400).json({ result: 'Bad request, date is missing' });

  try {
    const [data] = await getSalesSumToday(request.params.date);

    if (isEmptyData(data)) return response.sendStatus(204)

    return response.status(200).json({result: [data]});
  
  } catch (error) {
    return response.sendStatus(400);
  }
}

export {
  getSalesController,
  getSalesMoneyController,
}