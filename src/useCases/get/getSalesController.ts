import { Request, Response } from "express";
import { getSale } from "./getSales";

export async function getSalesController(request: Request, response: Response) {
  const date = new Date().toString().substr(4, 11);

  return await getSale(date)
    .then(([rows]) => response.status(200).json(rows))
    .catch((err) => { console.log(err) 
      response.sendStatus(400)})
}