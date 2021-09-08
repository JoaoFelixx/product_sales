import { Request, Response } from "express";
import { get, getSumToday } from "./GetSales";

class GetSalesController {

  async getController(request: Request, response: Response) {

    if (!request.params.date) return response.sendStatus(400);

    return await get(request.params.date)
      .then(([rows]) => response.status(200).json(rows))
      .catch((err) => { console.log(err)
        response.sendStatus(400)});
  }

  async getMoneyController(request: Request, response: Response) {
    if (!request.params.date) return response.sendStatus(400);

    return await getSumToday(request.params.date)
      .then(
        ([rows]) => response.status(200).json(rows))
      .catch(
        (err) => response.sendStatus(400));
  }
}

const { getController, getMoneyController } = new GetSalesController();

export {
  getController,
  getMoneyController
}