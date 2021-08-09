import express         from 'express';
import { router }      from './router/router';
// import middlewares_cors from './middlewares/middleware-cors';
import cors            from 'cors'

class Application {
  
  public express: express.Application;

  constructor() {
    this.express = express();
    
    this.middlewares();
    this.routes();
  }

  routes(): void {
    this.express.use(router);
  }

  middlewares(): void {
    this.express.use(express.json());
    this.express.use(cors());
  }
}

export default new Application().express;