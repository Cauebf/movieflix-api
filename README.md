# MovieFlix API 🎬📽️

A RESTful API for managing movie data — including genres, languages, Oscar wins, and release dates — built with **TypeScript**, **Express**, and **Prisma ORM**.

Includes **Swagger UI** documentation, rate limiting, and input sanitization for secure and maintainable API development.

## 📌 Table of Contents

-   [MovieFlix API 🎬📽️](#movieflix-api-️)
    -   [📌 Table of Contents](#-table-of-contents)
    -   [🌐 Overview](#-overview)
    -   [⚙️ Features](#️-features)
    -   [💻 Technologies Used](#-technologies-used)
    -   [🗝️ Key Takeaways](#️-key-takeaways)
    -   [📁 Project Structure](#-project-structure)
    -   [🚀 How to Run the Project](#-how-to-run-the-project)
    -   [📄 API Documentation](#-api-documentation)
    -   [🤝 Contributing](#-contributing)
    -   [💬 Contact](#-contact)

## 🌐 Overview

**MovieFlix API** provides a backend service for managing movie records with structured relationships for genres and languages.  
This project is built for learning, experimentation, and as a solid base for building scalable backend systems.

Main capabilities include:

-   Retrieve all movies or by genre
-   View detailed movie information
-   Create, update, and delete movies
-   Handle related genre/language data
-   Auto-generated API docs via Swagger

## ⚙️ Features

-   ✅ **CRUD operations** for movies
-   🧠 **Prisma ORM** for database management
-   🛡️ **Security middleware** (`helmet`, `xss-clean`, `express-rate-limit`)
-   🧪 **Centralized error handling**
-   🌐 **Swagger UI API documentation**
-   🐘 **PostgreSQL** as database
-   🧹 Clean, modular TypeScript code
-   📁 Scalable and easy-to-extend architecture

## 💻 Technologies Used

-   [**Express.js**](https://expressjs.com/) — Minimalist web framework for Node.js, used to create RESTful APIs.
-   [**TypeScript**](https://www.typescriptlang.org/) — Strongly typed superset of JavaScript that improves code quality and developer experience.
-   [**Prisma ORM**](https://www.prisma.io/) — Modern ORM that simplifies database access and migrations using a type-safe query builder.
-   [**PostgreSQL**](https://www.postgresql.org/) — Powerful open-source relational database system used to store movie, genre, and language data.
-   [**Swagger UI**](https://swagger.io/tools/swagger-ui/) — Tool for generating interactive API documentation and testing endpoints.
-   [**dotenv**](https://github.com/motdotla/dotenv) — Loads environment variables from a `.env` file into the application.
-   [**helmet**](https://helmetjs.github.io/) — Middleware that adds security headers to protect the app from well-known vulnerabilities.
-   [**xss-clean**](https://www.npmjs.com/package/xss-clean) — Sanitizes user input to prevent cross-site scripting (XSS) attacks.
-   [**express-rate-limit**](https://www.npmjs.com/package/express-rate-limit) — Limits repeated requests to public APIs to improve security.

## 🗝️ Key Takeaways

1. **Clean REST API** structure using Express + TypeScript
2. **Prisma** data modeling and querying
3. **Error-handling middleware** that follows best practices
4. **Swagger-based API docs** with real-time testing
5. **Scalable and secure backend foundation**

## 📁 Project Structure

```bash
movieflix-api/
├── prisma/
│ └── schema.prisma # Data models (Movie, Genre, Language)
├── src/
│ ├── routes/ # Route handlers (e.g., movies.ts)
│ ├── middleware/ # Error & not-found middleware
│ ├── errors/ # Custom error classes
│ ├── server.ts # Express app setup
│ └── ...
├── swagger.json # Swagger UI config
├── package.json
├── tsconfig.json
└── ...
```

## 🚀 How to Run the Project

1.  **Clone the repository**:

    ```bash
    git clone https://github.com/Cauebf/movieflix-api.git
    cd movieflix-api
    ```

2.  **Install dependencies**:

    ```bash
    npm install
    ```

3.  **Set up environment variables**:

    Create a `.env` file in the root directory and add:

    ```env
    DATABASE_URL=postgresql://USER:PASSWORD@HOST:PORT/DATABASE
    ```

4.  **Set up Prisma and the database**:

    ```bash
    npx prisma generate
    npx prisma migrate dev --name init
    ```

5.  **Start the development server**:

    ```bash
    npm run dev
    ```

    > The server will run on `http://localhost:3000` by default.

6.  **Build the app for production**:

    ```bash
    npm run build
    npm start
    ```

## 📄 API Documentation

-   Visit: `http://localhost:3000/api-docs`
-   Auto-generated via **Swagger UI**
-   Test endpoints live within the docs

**Sample Routes**:

-   `GET /api/v1/movies` → All movies
-   `GET /api/v1/movies?genre=Action` → Filter by genre
-   `GET /api/v1/movies/:id` → Movie by ID
-   `POST /api/v1/movies` → Create movie
-   `PUT /api/v1/movies/:id` → Update movie
-   `DELETE /api/v1/movies/:id` → Delete movie

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or pull requests for any improvements or bug fixes.

## 💬 Contact

For any inquiries or collaboration opportunities, feel free to reach out via:

[![Gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:cauebrolesef@gmail.com)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/cauebrolesef/)
[![Instagram](https://img.shields.io/badge/-Instagram-%23E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/cauebf_/)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Cauebf)

<p align="right">(<a href="#movieflix-api-">back to top</a>)</p>
