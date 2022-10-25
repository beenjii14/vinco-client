# Vinco client

> The technical test is for the Vinco team.

```text
Description:
↪ The objective of this test is to create a simple client that is able to connect to a server and save the user's session.
```

## Demo

[Live demo](https://vinco-client.vercel.app/)

![Vinco](https://i.ibb.co/Xxt2MtX/Screen-Shot-2022-10-24-at-23-12-51.png)

**Structured and configured packages for the Vinco client.**

## Configured packages

- [React](https://reactjs.org/)
- [NextJs](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [SASS](https://sass-lang.com/guide)
- [Husky](https://typicode.github.io/husky/#/)
- [Jest](https://jestjs.io/)
- [Eslint](https://eslint.org/)
- [Axios](https://axios-http.com/docs/intro)

## Structure

This is the directory structure of the application.

```text
  ├── __tests__ -> Unit tests
  ├── src -> Codebase
  │   ├── pages -> NextJs pages
  │   ├── components -> Components of the application
  │   ├── styles -> Global styles
  │   ├── utils -> Utils functions
  │   ├── helpers -> Helpers functions
  │   ├── interfaces -> Interfaces
  │   ├── middleware -> Middleware for authentication
  └── coverage
        ├── lcov-report
```

## Requirements

- [Node](https://nodejs.org/en/) >=16.14.0
- Install PNPM from [here](https://pnpm.io/es/installation) → Optional (is optional because you can use npm or yarn)
- Install Git from [here](https://git-scm.com/downloads)
- Have shell or command line (If you use Mac and Linux, you have a terminal pre-installed, if you are using windows you can use [git bash](https://git-scm.com/downloads))

## Development

```bash
# Clone the repo
git clone https://github.com/beenjii14/vinco-client.git

# Go to the project directory
cd vinco-client

# Configuration of the environment variables (description of the values in the next step)
cp .env.example .env

# Install dependencies
pnpm install

# Run the app
pnpm dev

```

[Configure the server by creating the .env file in the root of the project](#configuration)

The example structure is given in the [.env.example](.env.example) file

- Update `<LEVEL>` with the level of the log you want to see in the console.
- Update `<ENV>` Environment in which the server will run.
- Update `<SERVICE_NAME>` Name of the service.
- Update `<URL_VINCO_SERVICE>` URL of the Vinco service.
- Update `<SECRET>` With secret word to generate JWT token

## Production

```bash
# Clone the repo
git clone git clone https://github.com/beenjii14/vinco-client.git

# Install dependencies
npm install

# Run the app
npm run production:start
```

## Extra commands

Run the unit tests

```bash
# Run the unit tests with coverage
pnpm test

# Run the unit tests watch mode
pnpm test:watch
```

Run the eslint

```bash
pnpm lint
```

## [License MIT](LICENSE)
