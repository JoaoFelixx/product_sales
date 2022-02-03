import { Sequelize } from 'sequelize';
import { URL_POSTGRES } from '../secret';

const postgres = new Sequelize(URL_POSTGRES, { dialect: 'postgres' });

export default postgres;