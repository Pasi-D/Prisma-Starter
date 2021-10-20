<div align="center">
  <h1>Prisma Starter</h1>
</div>

![Prisma](https://i.imgur.com/h6UIYTu.png)

A simple project aimed to demonstrate the simplicity of using Prisma ◭

You can find the articles associated with this project.

1. [Simplify backend development with Prisma](https://javascript.plainenglish.io/simplifying-backend-development-with-prisma-564200f31943)
2. [A deep dive into Prisma Schema](https://javascript.plainenglish.io/diving-into-prisma-schema-b278e92dff8b)
3. [Data modeling with Prisma](https://pasindu-dilshan.medium.com/data-modeling-with-prisma-5c4c37f31d8c)

![Prisma_starter Git Flow](https://user-images.githubusercontent.com/19520064/131241821-3d4069ed-7a67-4c9c-a887-ca173818506a.jpg)


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
## Working with Data Proxy (Currently in Preview)

> Remove the `.env` and create a copy from `.env.proxy` 

```bash
cp .env.proxy .env
```

> Update `.env`

> To generate prisma client compatible with data proxy

```bash
PRISMA_CLIENT_ENGINE_TYPE='dataproxy' npx prisma generate
```

> To deploy changes to hosted database

1. Make changes to `schema.prisma` as follows

```prisma
datasource db {
  provider = "mysql"
  url      = env("MIGRATE_DATABASE_URL")
}
```

2. Then run

```bash
DATABASE_URL=\"$MIGRATE_DATABASE_URL\" npx prisma migrate deploy
```
3. To seed data

```bash
npx prisma db seed
```
