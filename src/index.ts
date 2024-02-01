import express from "express"
import { printResponseTime } from "./middlewares";
import { apiRoute } from './routes'

// Express
const app = express()

// Middlewares
if (process.env.NODE_ENV === 'development') {
	app.use(printResponseTime);
}
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/api", apiRoute)

app.listen(3000, 'localhost', () => {
	console.log('Server is running on http://localhost:3000')

	console.log(`METHOD\tSTATUS\tURL`)
});
