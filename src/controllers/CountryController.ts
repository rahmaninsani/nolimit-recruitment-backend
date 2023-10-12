import { NextFunction, Request, Response } from 'express';
import status from 'http-status';
import { CountryService } from '../services';

class CountryController {
  static async getCountries(req: Request, res: Response, next: NextFunction) {
    try {
      const countries = await CountryService.getCountries();
      countries.map((country: any) => (country.languages = country.languages.map((language: any) => language.name)));

      res.status(status.OK).json({ data: { countries } });
    } catch (error) {
      next(error);
    }
  }

  static async getCountry(req: Request, res: Response, next: NextFunction) {
    try {
      const countryCode = req.params.code;
      const country = await CountryService.getCountryByCode(countryCode);

      res.status(status.OK).json({ data: { country } });
    } catch (error) {
      next(error);
    }
  }
}

export default CountryController;
