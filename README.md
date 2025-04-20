# Fastify TypeScript Starter Template

A robust and production-ready starter template for developing APIs using **Fastify** and **TypeScript**. This setup includes comprehensive tooling for linting, formatting, commit message validation, and strict environment management.

## 🚀 Features

- **Fastify** – High-performance web framework
- **TypeScript** – Enhanced type safety and maintainability
- **Environment Variables** – Strict validation with **Zod**
- **Linting & Formatting** – Automated checks with **Biome**
- **Commit Management** – Enforced commit standards via **Commitlint** and **Husky**

### 🔌 Integrated Fastify Plugins

- **@fastify/rate-limit** – Controls the request rate per client
- **@fastify/helmet** – Security headers management
- **@fastify/cors** – Manages Cross-Origin Resource Sharing
- **@fastify/compress** – Compresses HTTP responses automatically

## 📁 Project Structure

```
├── .husky/
│   └── commit-msg          # Husky hook for commitlint
├── .biome.json              # Biome linting configuration
├── commitlint.config.js     # Commitlint configuration
├── jest.config.js           # Jest testing configuration
├── tsconfig.json            # TypeScript compiler options
├── tsup.config.ts           # TSUP bundler configuration
├── package.json
├── src/
│   ├── main/
│   │   ├── config/
│   │   │   ├── app.ts
│   │   │   └── env.ts
│   │   ├── plugins/
│   │   │   ├── cors.ts
│   │   │   ├── helmet.ts
│   │   │   ├── rate-limit.ts
│   │   │   ├── compress.ts
│   │   │   └── env.ts
│   │   ├── index.ts             # Application entrypoint
│   │   └── fastify.d.ts         # Fastify instance extensions
│   └── tests/                   # Jest tests
└── README.md
```

## 🛠️ Getting Started

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/whoisclebs/fastify_template.git my-fastify-app
cd my-fastify-app
npm install
```

### Environment Setup

Create a `.env` file:

```env
PORT=3000
DATABASE_URL=your-database-url

# Rate limit configuration
RATE_LIMIT_MAX=100
RATE_LIMIT_TIME_WINDOW=60000
```

### Common NPM Scripts

- `npm run build` – Build the project using TSUP.
- `npm run start` – Run the project with watch mode and auto-reload.
- `npm run lint` – Run linting and formatting checks using Biome.
- `npm run commit` – Run Commitlint interactively through Husky.
- `npm run test` – Execute Jest test suite.

## 📌 Commit Guidelines

This project uses the **Conventional Commits** specification. Husky and Commitlint will ensure adherence.

Example:

```bash
feat(api): add user registration endpoint
```

## 🤝 Contributing

Contributions are warmly welcomed. Ensure your commits follow Conventional Commit standards and pass all linting and tests.

## 📜 License

This project is licensed under the **MIT License**.