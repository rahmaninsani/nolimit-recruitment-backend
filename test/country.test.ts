import supertest from 'supertest';
import { web } from '../src/app';

const request = supertest(web);

describe('GET /countries', () => {
  it('should return a list of countries', async () => {
    const result = await request.get('/countries');
    const { status, body } = result;

    expect(status).toBe(200);
    expect(body).toHaveProperty('data');
    expect(body.data).toHaveProperty('countries');
    expect(body.data.countries).toBeInstanceOf(Array);
    expect(body.data.countries.length).toBeGreaterThan(0);
    expect(body.data.countries[0]).toHaveProperty('name');
    expect(body.data.countries[0]).toHaveProperty('languages');
    expect(body.data.countries[0].languages).toBeInstanceOf(Array);
    expect(body.data.countries[0].languages.length).toBeGreaterThan(0);
    expect(body.data.countries[0]).not.toHaveProperty('code');
  });
});

describe('GET /countries/:code', () => {
  it('should return a country', async () => {
    const result = await request.get('/countries/AE');
    const { status, body } = result;

    expect(status).toBe(200);
    expect(body).toHaveProperty('data');
    expect(body.data).toHaveProperty('country');
    expect(body.data.country).toHaveProperty('awsRegion');
    expect(body.data.country).toHaveProperty('capital');
    expect(body.data.country).toHaveProperty('code');
    expect(body.data.country).toHaveProperty('currencies');
    expect(body.data.country.currencies).toBeInstanceOf(Array);
    expect(body.data.country.currencies.length).toBeGreaterThan(0);
    expect(body.data.country).toHaveProperty('currency');
    expect(body.data.country).toHaveProperty('emoji');
    expect(body.data.country).toHaveProperty('emojiU');
    expect(body.data.country).toHaveProperty('name');
    expect(body.data.country).toHaveProperty('native');
    expect(body.data.country).toHaveProperty('phone');
    expect(body.data.country).toHaveProperty('phones');
    expect(body.data.country.phones).toBeInstanceOf(Array);
    expect(body.data.country.phones.length).toBeGreaterThan(0);
    expect(body.data.country).not.toHaveProperty('languages');
  });

  it('should return a 400 error', async () => {
    const result = await request.get('/countries/XX');
    const { status, body } = result;

    expect(status).toBe(400);

    expect(body).toHaveProperty('code');
    expect(body.code).toBe(400);

    expect(body).toHaveProperty('status');
    expect(body.status).toBe('Bad Request');

    expect(body).toHaveProperty('data');
    expect(body.data).toBe(null);

    expect(body).toHaveProperty('message');
    expect(body.message).toBe(
      'value must be one of [AF, AL, DZ, AS, AD, AO, AI, AG, AR, AM, AW, AU, AT, AZ, BS, BH, BD, BB, BY, BE, BZ, BJ, BM, BT, BO, BA, BW, BR, VG, BN, BG, BF, BI, KH, CM, CA, CV, KY, CF, TD, CL, CN, CX, CC, CO, KM, CG, CK, CR, CI, HR, CU, CY, CZ, DK, DJ, DM, DO, EC, EG, SV, GQ, ER, EE, ET, FK, FO, FJ, FI, FR, GF, PF, GA, GM, GE, DE, GH, GI, GR, GL, GD, GP, GU, GT, GN, GW, GY, HT, VA, HN, HU, IS, IN, ID, IR, IQ, IE, IL, IT, JM, JP, JO, KZ, KE, KI, KP, KR, KW, KG, LA, LV, LB, LS, LR, LY, LI, LT, LU, MK, MG, MW, MY, MV, ML, MT, IM, MH, MQ, MR, MU, YT, MX, FM, MD, MC, MN, MS, MA, MZ, MM, NA, NR, NP, NL, AN, NC, NZ, NI, NE, NG, NU, NF, MP, NO, OM, PK, PW, PS, PA, PG, PY, PE, PH, PN, PL, PT, PR, QA, RE, RO, RU, RW, KN, LC, PM, VC, SM, ST, SA, SN, SC, SL, SG, SK, SI, SB, SO, ZA, ES, LK, SD, SR, SJ, SZ, SE, CH, SY, TW, TJ, TZ, TH, TG, TK, TO, TT, TN, TR, TM, TC, TV, UG, UA, AE, GB, US, UM, UY, UZ, VU, VE, VN, VI, WF, EH, WS, YE, CD, ZM, ZW, HK, MO, AQ, BV, IO, TF, HM, SH, GS, GG, RS, BL, ME, JE, CW, MF, SX, TL, SS, AX, BQ, XK]'
    );
  });

  it('should return a 400 error', async () => {
    const result = await request.get('/countries/A');
    const { status, body } = result;

    expect(status).toBe(400);

    expect(body).toHaveProperty('code');
    expect(body.code).toBe(400);

    expect(body).toHaveProperty('status');
    expect(body.status).toBe('Bad Request');

    expect(body).toHaveProperty('data');
    expect(body.data).toBe(null);

    expect(body).toHaveProperty('message');
    expect(body.message).toBe(
      'value must be one of [AF, AL, DZ, AS, AD, AO, AI, AG, AR, AM, AW, AU, AT, AZ, BS, BH, BD, BB, BY, BE, BZ, BJ, BM, BT, BO, BA, BW, BR, VG, BN, BG, BF, BI, KH, CM, CA, CV, KY, CF, TD, CL, CN, CX, CC, CO, KM, CG, CK, CR, CI, HR, CU, CY, CZ, DK, DJ, DM, DO, EC, EG, SV, GQ, ER, EE, ET, FK, FO, FJ, FI, FR, GF, PF, GA, GM, GE, DE, GH, GI, GR, GL, GD, GP, GU, GT, GN, GW, GY, HT, VA, HN, HU, IS, IN, ID, IR, IQ, IE, IL, IT, JM, JP, JO, KZ, KE, KI, KP, KR, KW, KG, LA, LV, LB, LS, LR, LY, LI, LT, LU, MK, MG, MW, MY, MV, ML, MT, IM, MH, MQ, MR, MU, YT, MX, FM, MD, MC, MN, MS, MA, MZ, MM, NA, NR, NP, NL, AN, NC, NZ, NI, NE, NG, NU, NF, MP, NO, OM, PK, PW, PS, PA, PG, PY, PE, PH, PN, PL, PT, PR, QA, RE, RO, RU, RW, KN, LC, PM, VC, SM, ST, SA, SN, SC, SL, SG, SK, SI, SB, SO, ZA, ES, LK, SD, SR, SJ, SZ, SE, CH, SY, TW, TJ, TZ, TH, TG, TK, TO, TT, TN, TR, TM, TC, TV, UG, UA, AE, GB, US, UM, UY, UZ, VU, VE, VN, VI, WF, EH, WS, YE, CD, ZM, ZW, HK, MO, AQ, BV, IO, TF, HM, SH, GS, GG, RS, BL, ME, JE, CW, MF, SX, TL, SS, AX, BQ, XK]. value length must be 2 characters long'
    );
  });
});

describe('GET /test', () => {
  it('should return a 404 error', async () => {
    const result = await request.get('/test');
    const { status, body } = result;

    expect(status).toBe(404);

    expect(body).toHaveProperty('code');
    expect(body.code).toBe(404);

    expect(body).toHaveProperty('status');
    expect(body.status).toBe('Not Found');

    expect(body).toHaveProperty('data');
    expect(body.data).toBe(null);

    expect(body).toHaveProperty('message');
    expect(body.message).toBe('The requested URL was not found on this server.');
  });
});

describe('GET /', () => {
  it('should return a 200', async () => {
    const result = await request.get('/');
    const { status, body } = result;

    expect(status).toBe(200);

    expect(body).toHaveProperty('code');
    expect(body.code).toBe(200);

    expect(body).toHaveProperty('status');
    expect(body.status).toBe('OK');

    expect(body).toHaveProperty('data');
    expect(body.data).toBe(null);

    expect(body).toHaveProperty('message');
    expect(body.message).toBe('Welcome to the Countries API by https://github.com/rahmaninsani');
  });
});
