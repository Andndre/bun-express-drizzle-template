import { it, describe, expect } from 'bun:test'

describe("home api route", () => {
	it("should return hello world", async () => {
		const response = await fetch("http://localhost:3000/api")
		expect(response.status).toBe(200)
		expect(await response.text()).toBe("Hello World!")
	})
})
