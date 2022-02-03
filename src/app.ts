import express from 'express';
import cors from 'cors';
import { corsOptions } from './config';
import { postgres } from './connections';

const app = express();

app.use(cors(corsOptions));
app.use(express.json());

const PORT = process.env.PORT || 5000;

postgres.authenticate()
  .then(() => console.log('Successful connection'))
  .catch((err) => console.log('Error connection: ', err));

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));