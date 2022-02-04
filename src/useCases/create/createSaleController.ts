import { Request, Response } from 'express';
import { format } from 'date-fns';
import createSale from './createSale';

async function createSaleController(request: Request, response: Response) {
  try {
    const hasError = [];
    const date = format(new Date(), 'MM/dd/yyyy')

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
          return hasError.push(`${key} is invalid `)

        return { ...acc, [key]: value }
      }, {})

    if (hasError.length > 0) return response.status(400).json({ error: [hasError] });

    await createSale(request.body)

    return response.sendStatus(201)

  } catch (error) {
    response.sendStatus(400)
  }
}

export default createSaleController