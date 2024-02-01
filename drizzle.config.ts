import { defineConfig } from 'drizzle-kit'
import 'dotenv/config'

export default defineConfig({
 	schema: "./src/database/schema.ts",
	driver: 'mysql2',
	out: './src/database/migrations',
	dbCredentials: {
		database: process.env.DATABASE_NAME!,
		host: process.env.DATABASE_HOST!,
		password: process.env.DATABASE_PASSWORD!,
		port: +process.env.DATABASE_PORT!,
		user: process.env.DATABASE_USER!,
		uri: process.env.DATABASE_URI!,
	},
})
