import { Request, Response } from 'express';
import { createSale } from './createSale'

export async function createSaleController(request:Request, response: Response) {
  console.log(request.body)

  try {
    if (!request.body) return response.sendStatus(404);

    console.log(request.body)

    await createSale(request.body)
    return response.sendStatus(201)

  } catch (error) {
    console.log(error)

    response.sendStatus(400)
  }
} 