import dotenv from 'dotenv';
dotenv.config();

import { web } from './app';

const APP_PORT = process.env.APP_PORT || 5000;

web.listen(APP_PORT, () => {
  console.log(`Server is running on http://localhost:${APP_PORT}`);
});
