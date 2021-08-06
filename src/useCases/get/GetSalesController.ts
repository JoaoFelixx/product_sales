import { Request, Response } from "express";
import getSales from "./GetSales";

class GetSalesController {

  async getController(request: Request, response: Response) {

    if (!request.params.date) return response.sendStatus(400);

    return await getSales.today(request.params.date)
      .then(([rows]) => response.status(200).json(rows))
      .catch((err) => { console.log(err)
        response.sendStatus(400)});
  }

  async getMoneyController(request: Request, response: Response) {
    if (!request.params.date) return response.sendStatus(400);

    return await getSales.sumToday(request.params.date)
      .then(
        ([rows]) => response.status(200).json(rows))
      .catch(
        (err) => response.sendStatus(400));
  }
}

export default new GetSalesController();