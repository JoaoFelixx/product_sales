import express from 'express';
import cors from 'cors';
import { corsOptions } from './config';
import { postgres } from './connections';

const app = express();

app.use(cors(corsOptions));
app.use(express.json());

postgres.authenticate()
  .then(() => console.log('Successful connection'))
  .catch((err) => console.log('Error connection: ', err));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));