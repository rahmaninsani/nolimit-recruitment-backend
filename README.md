# NoLimit Indonesia Recruitment Backend Test

- Name: Rahman Insani
- Position: Backend Developer (Node.js)

## Project Structure

```
├── src
│   ├── app
│   │   ├── index.ts
│   │   └── web.ts
│   ├── controllers
│   │   ├── CountryController.ts
│   │   └── index.ts
│   ├── errors
│   │   ├── ResponseError.ts
│   │   └── index.ts
│   ├── interfaces
│   │   ├── index.ts
│   │   └── response-interface.ts
│   ├── middlewares
│   │   ├── error-middleware.ts
│   │   └── index.ts
│   ├── routers
│   │   ├── country-router.ts
│   │   └── index.ts
│   ├── services
│   │   ├── CountryService.ts
│   │   └── index.ts
│   ├── utils
│   │   ├── index.ts
│   │   └── validation-util.ts
│   ├── validations
│   │   ├── country-validation.ts
│   │   └── index.ts
│   └── index.ts
├── test
│   └── country.test.ts
├── Dockerfile
├── README.md
├── babel.config.js
├── package-lock.json
├── package.json
├── test.http
└── tsconfig.json
```

## How to run

### Using Docker

1. Clone this repository

```bash
git clone https://github.com/rahmaninsani/nolimit-recruitment-backend.git
```

2. Go to the project directory

```bash
cd nolimit-recruitment-backend
```

3. Build the docker image

```bash
docker build -t nolimit-recruitment-backend .
```

4. Run the docker image

```bash
docker run -p 5000:5000 nolimit-recruitment-backend
```

5. Open your browser/Postman/Insomnia and go to `http://localhost:5000`

### Using Node

1. Clone this repository

```bash
git clone https://github.com/rahmaninsani/nolimit-recruitment-backend.git
```

2. Go to the project directory

```bash
cd nolimit-recruitment-backend
```

3. Install dependencies

```bash
npm install
```

4. Copy `.env.example` file to `.env` file

5. Set the `APP_PORT` in `.env` file to `5000` or any port you want

6. Run the project

```bash
npm start
```

5. Open your browser/Postman/Insomnia and go to `http://localhost:5000`

## API Documentation

| Method | Endpoint         | Description         |
| ------ | ---------------- | ------------------- |
| GET    | /countries       | Get all countries   |
| GET    | /countries/:code | Get country by code |

## Postman Collection

Link: https://documenter.getpostman.com/view/9933041/2s9YR3dG3g

## Result

### Get all countries
<img width="1061" alt="Get all countries" src="https://github.com/rahmaninsani/nolimit-recruitment-backend/assets/59505359/d2fe7197-9098-4c5a-8a92-9311a6617268">


### Get country by code

1. 200 OK
   <img width="1061" alt="Get country by code 200 OK" src="https://github.com/rahmaninsani/nolimit-recruitment-backend/assets/59505359/04250c94-e3fa-42d5-90b3-4b6a19c93731">


3. 400 Bad Request (Empty code)
   <img width="1061" alt="Get country by code 400 Bad Request (Empty code)" src="https://github.com/rahmaninsani/nolimit-recruitment-backend/assets/59505359/bcf04eb3-7acb-41b7-a215-68451618a717">


5. 400 Bad Request (Invalid code)
   <img width="1061" alt="Get country by code 400 Bad Request (Invalid code)" src="https://github.com/rahmaninsani/nolimit-recruitment-backend/assets/59505359/9984e79e-81b8-46ce-b3a4-293a4e267de3">


### 404 Not Found Route
<img width="1061" alt="404 Not Found Route" src="https://github.com/rahmaninsani/nolimit-recruitment-backend/assets/59505359/66b671ef-f43e-4abe-9b9f-6e30bd97055c">


### Root Route
<img width="1061" alt="Root Route" src="https://github.com/rahmaninsani/nolimit-recruitment-backend/assets/59505359/646ab6f0-a84d-4f9d-9fde-311fc89bedae">


## Unit Test

Run the unit test using this command

```bash
npm test
```

## Unit Test Result
<img width="390" alt="Unit Test Result" src="https://github.com/rahmaninsani/nolimit-recruitment-backend/assets/59505359/846fede2-f48c-4454-b4d9-b81374599439">

