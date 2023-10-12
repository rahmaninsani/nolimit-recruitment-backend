import Joi from 'joi';
import lookup from 'country-code-lookup';

const getCountryValidation = Joi.string()
  .length(2)
  .required()
  .valid(...lookup.countries.map((country: any) => country.iso2));

export default getCountryValidation;
