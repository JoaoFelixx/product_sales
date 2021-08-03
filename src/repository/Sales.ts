import connection from '../connection/mysqlConnection';
import { SalesInterface } from '../entities/SalesInterface';

class Sales {

  constructor() {
    connection.connect(
      (err) => { if (err) throw new Error('Refused connection') })
  }
  
  async get(sale_date: string) {
    return await connection.promise().query(
      'SELECT * FROM `sales` WHERE `product_sale_date` = ?',
      [sale_date]
    )
  }

  async add(sale: SalesInterface, product_sale_date) {
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
}

export default new Sales()