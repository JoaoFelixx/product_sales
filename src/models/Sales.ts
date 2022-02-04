import Employees from "./Employees";
import Sequelize from 'sequelize';
import { postgres } from '../connections';

const Sales = postgres.define('Sales', {
  _id: {
    type: Sequelize.UUID,
    allowNull: false,
    primaryKey: true,
  },

  name: {
    type: Sequelize.STRING(15),
    allowNull: false,
  },

  value: {
    type: Sequelize.STRING(10),
    allowNull: false,
  },

  amount: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },

  form_of_payment: {
    type: Sequelize.ENUM('pix', 'cartao', 'dinheiro'),
    allowNull: false,
  },

  seller_id: {
    type: Sequelize.UUID,
    allowNull: false,
    references: {
      key: '_id',
      model: Employees,
    }
  }
});

export default Sales;