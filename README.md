# MovieFlix API

This project is a RESTful API developed with Node.js, Express, TypeScript, and Prisma. It allows managing movies, including operations to retrieve, create, update, and delete movies, as well as listing all movies by genre. The API also provides interactive documentation using Swagger.

## Features

-   **Movie CRUD**: Retrieve, add, edit, and delete movies.
-   **Filters**: Retrieve movies by genre.
-   **Interactive Documentation**: The API is documented with Swagger, accessible at the `/api-docs` endpoint.
-   **Security**: Protection against attacks using Helmet, CORS, and XSS.
-   **Rate Limiting**: Request rate limiting per IP using Express Rate Limit.

## Technologies Used

-   **Node.js**: JavaScript runtime environment for the server.
-   **Express**: Framework for building RESTful APIs.
-   **TypeScript**: A superset of JavaScript that adds static typing.
-   **Prisma**: ORM to simplify database access.
-   **Swagger**: Tool for generating interactive API documentation.
-   **Helmet**: Security middleware for Express.
-   **xss-clean**: Middleware to protect against XSS attacks.
-   **express-rate-limit**: Rate limiting for requests per IP.
-   **PostgreSQL**: Relational database used to store movies, genres, and languages.

## Prerequisites

Before running the project, you need to have the following tools installed:

-   [Node.js](https://nodejs.org/)
-   [npm](https://www.npmjs.com/)
-   [Prisma CLI](https://www.prisma.io/docs/getting-started/setup-prisma) (if not installed globally, can be used via `npx`).

## Installation

1. **Clone the repository**

    ```bash
    git clone https://github.com/Cauebf/movieflix-api
    cd movieflix-api
    ```

2. **Install dependencies**

    ```bash
    npm install
    ```

3. **Database Configuration**: Create a .env file in the root of the project and add the DATABASE_URL variable with your PostgreSQL database connection URL:

    ```bash
    DATABASE_URL="postgresql://username:password@localhost:5432/movieflix?schema=public"
    ```

4. **Generate Prisma Client**: If the Prisma client is not generated yet, run the following command:

    ```bash
    npx prisma generate
    ```

5. **Run Migrations**: If you haven't run the migrations yet, execute the following to set up the database:

    ```bash
    npx prisma migrate dev
    ```

6. **Run the Project**: To start the server, run:

    ```bash
    npm run dev
    ```

The server will be available at http://localhost:3000.

## Contributing

If you would like to contribute to this project, feel free to open issues or submit pull requests.