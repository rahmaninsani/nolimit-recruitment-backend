import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

import router from '../routers';
import { errorMiddleware } from '../middlewares';

const web = express();
web.use(cors());
web.use(morgan('dev'));
web.use(express.json());
web.use(express.urlencoded({ extended: true }));

web.use(router);

web.use(errorMiddleware);

export default web;
