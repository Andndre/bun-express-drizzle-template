import type { Handler } from "express";

export const index: Handler = (_req, res) => {
	res.send("Hello World!")
}
