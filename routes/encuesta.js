const {Router} = require('express')
const router = Router()

const{getEncuesta,postEncuesta,putEncuesta,deleteEncuesta,patchEncuesta}=require('../controller/encuesta')

router.get('/',getEncuesta)
router.post('/',postEncuesta)
router.put('/',putEncuesta)
router.delete('/',deleteEncuesta)
router.patch('/',patchEncuesta)


module.exports= router