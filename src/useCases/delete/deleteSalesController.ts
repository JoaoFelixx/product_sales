import { Request, Response } from 'express';
import { deleteSales } from './deleteSale'
export async function deleteSalesController(request: Request, response: Response) {
  if (!request.params._id) return response.sendStatus(400);

  return deleteSales(request.params._id)
    .then(
      () => response.sendStatus(202))
    .catch(
      (err) => response.sendStatus(400)) 
}