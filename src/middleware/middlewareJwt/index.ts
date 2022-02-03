import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
// import { SECRET_KEY_JWT } = require('../../../secret');
const SECRET_KEY_JWT = '12345';

function middlewareJwt(request: Request, response: Response, next: NextFunction) {
  try {
    const { authorization } = request.headers;

    if (!authorization) return response.sendStatus(401);

    const token = authorization.replace('Bearer', '').trim();
    
    jwt.verify(token, SECRET_KEY_JWT)

    return next();

  } catch (err) {
    return response.sendStatus(401);
  }
}

export default middlewareJwt;