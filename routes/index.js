/**
 * Created by Josué Paiva on 17/05/18.
 */
 
var express = require('express');
var router = express.Router();
const qrcodecontroller = require('../controllers/qrcodecontroller');

/* GET home page. */
router.get('/', qrcodecontroller.index);

module.exports = router;
