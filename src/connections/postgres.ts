import { Sequelize } from 'sequelize';
import {
  URL_POSTGRES,
  PASSWORD_POSTGRES,
  USER_POSTGRES,
} from '../secret';

const postgres = new Sequelize(URL_POSTGRES, {
  dialect: 'postgres',
  password: PASSWORD_POSTGRES,
  username: USER_POSTGRES,
});

postgres.sync({ force: true })
  .then(() => console.log('Forçando a criar model'))

export default postgres;