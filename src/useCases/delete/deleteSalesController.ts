import { Request, Response } from 'express';
import deleteSale from './deleteSale'

async function deleteSalesController(request: Request, response: Response) {
  try {
    const { _id } = request.params;

    await deleteSale(_id)
    response.sendStatus(202)

  } catch (error) {
    return response.sendStatus(204)
  }
}

export default deleteSalesController;