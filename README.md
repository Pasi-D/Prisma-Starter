<div align="center">
  <h1>Prisma Starter</h1>
</div>

![Prisma](https://i.imgur.com/h6UIYTu.png)

A simple project aimed to demonstrate the simplicity of using Prisma ◭

This demo is split into following branches to keep in touch with progress.

1. [0-Initial-Script](https://github.com/Pasi-D/Prisma-Starter/tree/0-Initial-Script) - Starting Code.
2. [0.1-Setting-Prisma
](https://github.com/Pasi-D/Prisma-Starter/tree/1-Setting-Prisma) - Setup prisma within codebase.
3. [0.3-prisma-client
](https://github.com/Pasi-D/Prisma-Starter/tree/3-prisma-client) - Database Querying with Prisma client.
4. [0.4-prisma-seed
](https://github.com/Pasi-D/Prisma-Starter/tree/4-prisma-seed) - Seeding Database with Prisma seed preview feature.

![Prisma_starter Git Flow](https://user-images.githubusercontent.com/19520064/126897759-9defe0e7-fc7d-4300-94e3-68ac1e002bc0.jpg)

[Read the walkthrough on Medium](https://medium.com/@pasindu-dilshan/simplifying-backend-development-with-prisma-564200f31943)

> ## Prerequisites

### Use the appropriate node version

If you don't have node installed install the version defined in `.nvmrc`. You can use [nvm](https://github.com/nvm-sh/nvm) to manage the node version.

```bash
nvm use
```

### Update environment variables

Create a copy of `.env.dist` and make the appropriate changes in your `.env` file

```bash
cp .env.dist .env
```
> ## Running Locally

### Install dependencies

You can use either `npm` or `yarn` (If using `yarn` please remove ```package-lock.json``` file first)
```bash
npm install
```
### Runs the script

```bash
npm run serve
```

### Check Linting

```bash
npm run lint
```
