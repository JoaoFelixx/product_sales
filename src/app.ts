import cors from 'cors';
import express from 'express';
import salesRouter from './router/salesRouter';
import dividendsRouter from './router/dividendsRouter';

class Application {
  
  public express: express.Application;

  constructor() {
    this.express = express();
    this.middlewares();
    this.routes();
  }

  routes(): void {
    this.express.use('/api/v1/sales',salesRouter);
    this.express.use('/api/v1/dividends', dividendsRouter);
  }

  middlewares(): void {
    this.express.use(express.json());
    this.express.use(cors());
  }
}

export default new Application().express;