import express, { Router } from 'express';
import status from 'http-status';
import countryRouter from './country-router';
import { IResponse } from '../interfaces';
import { ResponseError } from '../errors';

const router: Router = express.Router();
router.use('/countries', countryRouter);

router.get('/', (req, res) => {
  const response: IResponse = {
    code: status.OK,
    status: status[status.OK],
    message: 'Welcome to the Countries API by https://github.com/rahmaninsani',
    data: null,
  };
  res.status(status.OK).json(response);
});

router.get('*', (req, res) => {
  const message = 'The requested URL was not found on this server.';
  throw new ResponseError(status.NOT_FOUND, message);
});

export default router;
