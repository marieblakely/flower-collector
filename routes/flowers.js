import { Router } from 'express'
import * as flowersCtrl from '../controllers/flowers.js'
const router = Router()


router.get('/', flowersCtrl.index)

router.get('/new', flowersCtrl.new) 

router.get('/:flowerId', flowersCtrl.show)

router.get('/:flowerId/edit', flowersCtrl.edit)

router.post('/', flowersCtrl.create)

router.delete('/:flowerId', flowersCtrl.delete)

router.put('/:flowerId', flowersCtrl.update)





export { router }
