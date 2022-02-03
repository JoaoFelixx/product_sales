import express from 'express';
import cors from 'cors';
import routes from './routes';
import { corsOptions } from './config';

const app = express();

app.use(express.json());
app.use(cors(corsOptions));
app.use('/api/v1/sales',routes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));