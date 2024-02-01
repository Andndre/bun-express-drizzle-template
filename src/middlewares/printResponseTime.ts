import type { Handler } from "express"
import { getDurationInMilliseconds } from "../utils/time"

const handler: Handler = (req, res, next) => {
	const start = process.hrtime()
	res.on('close', () => {
		console.log(`${req.method}\t${req.url}\t${getDurationInMilliseconds(start)}ms`)
	})
	next()
}

export default handler;
