import { Router } from 'express'
import * as flowersCtrl from '../controllers/flowers.js'
const router = Router()

// GET localhost:3000/flowers
router.get('/', flowersCtrl.index)

// GET localhost:3000/todos/new
router.get('/new', flowersCtrl.new) 
// POST localhost:3000/todos
router.post('/', flowersCtrl.create)


export { router }
