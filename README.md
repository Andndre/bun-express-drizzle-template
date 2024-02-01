# BUN Express + Drizzle Template

## Bun
Bun is a fast all-in-one JavaScript runtime.
## Drizzle ORM
Drizzle is a lightweight ORM that supports Typescript and works with Bun.

## Get started:
### Clone the repository
```bash
# clone the repository
git clone https://github.com/andndre/bun-express-drizzle-template.git your-project-name
# go to the project directory
cd your-project-name
# remove the git repository
rm -rf.git
```

### Install packages
```bash
bun install
```
### Copy .env.example to .env
```bash
cp .env.example .env
```

### Change .env file
```bash
DATABASE_HOST=localhost
DATABASE_PORT=3306
DATABASE_USER=root
DATABASE_NAME=db_test
DATABASE_PASSWORD=
DATABASE_URI=mysql://root:@localhost:3306/db_test
```

### Run migrations
```bash
bun run db:push
```

## To run:
```bash
bun run src/index.ts
```

This project was created using `bun init` in bun v1.0.25. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.
