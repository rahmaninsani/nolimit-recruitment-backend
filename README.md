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
<img width="1061" alt="Get all countries" src="https://github.com/rahmaninsani/nolimit-recruitment-backend/assets/59505359/5d8fb8db-79a9-434d-b0f2-eb7bb51ac4c7">



### Get country by code

1. 200 OK
   <img width="1061" alt="Get country by code 200 OK" src="https://github.com/rahmaninsani/nolimit-recruitment-backend/assets/59505359/38fd0633-6aee-4016-8a97-f3fb899a3a5d">



3. 400 Bad Request (Empty code)
   <img width="1061" alt="Get country by code 400 Bad Request (Empty code)" src="https://github.com/rahmaninsani/nolimit-recruitment-backend/assets/59505359/72082ab4-221f-42c4-be7e-84420399e19b">


4. 400 Bad Request (Invalid code)
   <img width="1061" alt="Get country by code 400 Bad Request (Invalid code)" src="https://github.com/rahmaninsani/nolimit-recruitment-backend/assets/59505359/d179279e-6bf6-48f2-a690-2fafb9916ae3">



### 404 Not Found Route
<img width="1061" alt="404 Not Found Route" src="https://github.com/rahmaninsani/nolimit-recruitment-backend/assets/59505359/4ec75060-c361-49e3-b61b-b20e9edbd92e">



### Root Route
<img width="1061" alt="Root Route" src="https://github.com/rahmaninsani/nolimit-recruitment-backend/assets/59505359/347d6775-05c1-4531-be4d-297ae685b7bb">



## Unit Test

Run the unit test using this command

```bash
npm test
```

## Unit Test Result
<img width="390" alt="Unit Test Result" src="https://github.com/rahmaninsani/nolimit-recruitment-backend/assets/59505359/483a2570-99fe-43d0-bdb6-72b032bac242">



