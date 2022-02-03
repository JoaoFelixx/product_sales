const Sequelize = require('sequelize');
const { postgres } = require('../connections');

const Sales = postgres.define('Users', {
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
    type: Sequelize.STRING(4),
    allowNull: false,
  },

  sale_date: {
    type: Sequelize.DATE,
    allowNull: false,
  },

  form_of_payment: {
    type: Sequelize.ENUM('pix','cartao','dinheiro'),
    allowNull: false,
  },
});

export default Sales;