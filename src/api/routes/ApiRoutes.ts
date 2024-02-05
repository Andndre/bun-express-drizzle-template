import { Router } from "express";
import { ApiController } from '@/api/controllers'

const router = Router({
	strict: true,
	caseSensitive: true,
})

router.get('/', ApiController.index)

export default router
