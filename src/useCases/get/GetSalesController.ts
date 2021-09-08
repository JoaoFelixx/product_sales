import { Request, Response } from "express";
import { get, getSumToday } from "./GetSales";

class GetSalesController {

  async getController(request: Request, response: Response) {

    if (!request.params.date) return response.sendStatus(400);

    return await get(request.params.date)
      .then(
        ([data]) => response.status(200).json({result: [data]}))
      .catch(
        (err) => response.sendStatus(400));
  }

  async getMoneyController(request: Request, response: Response) {
    if (!request.params.date) return response.sendStatus(400);

    return await getSumToday(request.params.date)
      .then(
        ([data]) => response.status(200).json({result: [data]}))
      .catch(
        (err) => response.sendStatus(400));
  }
}

const { getController, getMoneyController } = new GetSalesController();

export {
  getController,
  getMoneyController
}