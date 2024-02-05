import chalk from "chalk"
import type { Handler } from "express"
import { TimeHelper } from "@/api/helpers"

const methodWithColor = (method: string): string => {
	switch (method) {
		case 'GET':
			return chalk.greenBright(method)
		case 'POST':
			return chalk.blueBright(method)
		case 'PUT':
			return chalk.yellowBright(method)
		case 'DELETE':
			return chalk.redBright(method)
		default:
			return method
	}
}

const statusCodeWithColor = (statusCode: number): string => {
	if (statusCode >= 200 && statusCode < 300) {
		return chalk.greenBright(statusCode)
	} else if (statusCode >= 300 && statusCode < 400) {
		return chalk.blueBright(statusCode)
	} else if (statusCode >= 400 && statusCode < 500) {
		return chalk.yellowBright(statusCode)
	}
	return chalk.red(statusCode)
}

const timeWithColor = (time: number): string => {
	if (time < 100) {
		return chalk.greenBright(`${time}ms`)
	} else if (time < 500) {
		return chalk.blueBright(`${time}ms`)
	} else if (time < 1000) {
		return chalk.yellowBright(`${time}ms`)
	}
	return chalk.redBright(`${time}ms`)
}

const handler: Handler = (req, res, next) => {
	const start = process.hrtime()
	res.on('close', () => {
		const timeTaken = TimeHelper.getDurationInMilliseconds(start)
		console.log(`${methodWithColor(req.method)}\t${statusCodeWithColor(res.statusCode)}\t${req.originalUrl} ${chalk.gray(`took ${timeWithColor(timeTaken)}`)}`)
	})
	next()
}

export default handler;
