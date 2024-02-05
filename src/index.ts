import express from "express"
import { PrintResponseTimeMiddleware } from "@/api/middlewares";
import { ApiRoutes } from '@/api/routes'

// Express
const app = express()

// Middlewares
if (process.env.NODE_ENV === 'development') {
	app.use(PrintResponseTimeMiddleware);
}
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/api", ApiRoutes)

app.listen(3000, 'localhost', () => {
	console.log('Server is running on http://localhost:3000')

	console.log(`METHOD\tSTATUS\tURL`)
});
