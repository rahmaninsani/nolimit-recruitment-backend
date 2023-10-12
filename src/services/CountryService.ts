import axios, { AxiosInstance } from 'axios';
import status from 'http-status';
import { validateRequest } from '../utils';
import { getCountryValidation } from '../validations';
import { ResponseError } from '../errors';

class CountryService {
  static model: AxiosInstance;

  public static async getCountries() {
    const response = await this.model.post(
      '',
      {
        query: `
          query GetCountries {
            countries {
              name
              languages {
                name
              }
            }
          }
        `,
      },
      {
        timeout: 5000,
      }
    );

    if (response.data.errors) {
      const message = `Failed to fetch countries: ${response.data.errors[0].message}`;
      throw new ResponseError(status.BAD_REQUEST, message);
    }

    return response.data.data.countries;
  }

  public static async getCountryByCode(code: string) {
    code = validateRequest(getCountryValidation, code.toUpperCase());
    const response = await this.model.post(
      '',
      {
        query: `
          query GetCountry($code: ID!) {
            country(code: $code) {
              awsRegion
              capital
              code
              currencies
              currency
              emoji
              emojiU
              name
              native
              phone
              phones
            }
          }
        `,
        variables: { code },
      },
      {
        timeout: 3000,
      }
    );

    if (response.data.errors) {
      const message = `Failed to fetch country by code '${code}': ${response.data.errors[0].message}`;
      throw new ResponseError(status.BAD_REQUEST, message);
    }

    return response.data.data.country;
  }
}

CountryService.model = axios.create({
  baseURL: 'https://countries.trevorblades.com/graphql',
});

export default CountryService;
