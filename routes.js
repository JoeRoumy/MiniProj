var express = require('express');
var router = express.Router();
var controller = require('./Controller');

router.get('/',controller.prnt);
router.post('/',controller.insrt);


module.exports = router;
