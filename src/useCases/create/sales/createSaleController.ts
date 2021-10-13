import { Request, Response } from 'express';
import { createSale } from './createSale'

export const createSaleController = async (request:Request, response: Response) => {
  try {
    const hasError = [];
    const {
      product_name,
      product_value,
      product_amount,
      product_form_of_payment,
    } = request.body;

    const fieldsToValidate = {
      product_name,
      product_value,
      product_amount,
      product_form_of_payment,
    }

    Object.entries(fieldsToValidate)
      .reduce((acc, [key, value]) => {

        if (typeof value != "string" || value.length === 0) 
          return hasError.push(`${key} is invalid ` ) 

        return { ...acc, [key]: value }
      },{})

    if (hasError.length > 0) return response.status(400).json({ error: [hasError] });

    await createSale(request.body)
    
    return response.sendStatus(201)

  } catch (error) {
    response.sendStatus(400)
  }
} 