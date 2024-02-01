import { Router } from "express";
import { api } from './controllers'

const router = Router({
	strict: true,
	caseSensitive: true,
})

router.get('/', api.index)

export default router
