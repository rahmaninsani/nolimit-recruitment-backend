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

## Result

### Get all countries

### Get country by code

## Unit Test

Run the unit test using this command

```bash
npm test
```

## Unit Test Result
