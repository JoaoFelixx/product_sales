import { Request, Response } from 'express';
import { createSale } from './createSale'

export async function createSaleController(request:Request, response: Response) {
  if (!request.body) return response.sendStatus(404);
  const { product_name, product_value, product_amount, product_form_of_payment  } = request.body;

  const sale = { product_name, product_value, product_amount, product_form_of_payment}
  return await createSale(sale)
    .then(() => response.sendStatus(201))
    .catch((err) => response.sendStatus(400))
} 