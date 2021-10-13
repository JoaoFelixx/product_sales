import { Request, Response } from 'express';
import { deleteSale } from './deleteSale'

const isValidId = (id) => isNaN(parseInt(id)) ? false : true;  

export const deleteSalesController = async (request: Request, response: Response) => {
  const {_id } = request.params;

  if (!_id) 
    return response.status(400).json({ result: 'Bad request, `_id` is missing' });

  if (!isValidId(_id))
    return response.status(400).json({ result: 'Bad request, `_id` is invalid' });

  try {
    await deleteSale(request.params._id)
    response.sendStatus(202)

  } catch (error) {
    return response.sendStatus(204)
  }
}