import express, { Router } from 'express';
import { CountryController } from '../controllers';

const router: Router = express.Router();

router.get('/', CountryController.getCountries);
router.get('/:code', CountryController.getCountry);

export default router;
