import connections  from '../connections';
import { SalesInterface } from '../entities';

const { mysqlConnection: connection } = connections 

export default class Sales {

  constructor() {
    connection.connect(
      (err) => { if (err) throw new Error('Refused connection') })
  }
  
  async get(product_sale_date: string) {
    return await connection.promise()
      .query(
        'SELECT * FROM `sales` WHERE `product_sale_date` = ?',
        [product_sale_date]
      )
  }

  async getMoney(product_sale_date: string) {
    return await connection.promise()
      .query(
        'SELECT SUM(product_value) FROM `sales` WHERE `product_sale_date` = ?',
        [product_sale_date]
      )
  }

  async add(sale: SalesInterface, product_sale_date: string) {
    try {
      const { 
        product_name, 
        product_value, 
        product_amount, 
        product_form_of_payment, 
      } = sale;
      
      return await connection.execute(
        'INSERT INTO `sales` (product_name, product_value, product_amount, product_sale_date, product_form_of_payment) VALUES (?,?,?,?,?)',
        [product_name, product_value, product_amount, product_sale_date, product_form_of_payment]
      )
    } catch (error) {
      throw new Error(error)
    }
  }
  
  async remove(_id: string) {
    return connection.execute(
      'DELETE FROM `sales` WHERE product_id = ?',
      [_id]
    )
  }
}