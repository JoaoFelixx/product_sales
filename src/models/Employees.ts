import Sequelize from 'sequelize';
import { postgres } from '../connections';

const Employees = postgres.define('Employees', {
  _id: {
    type: Sequelize.UUID,
    allowNull: false,
    primaryKey: true,
  },

  name: {
    type: Sequelize.STRING(15),
    allowNull: false,
  },

  work: {
    type: Sequelize.STRING(10),
    allowNull: false,
  },

  password: {
    type: Sequelize.STRING(50),
    allowNull: false,
  }
});

export default Employees;