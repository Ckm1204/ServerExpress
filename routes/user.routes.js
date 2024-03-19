const { Router } = require('express');

const {
    usersPost,
    usersGet

}= require('../controller/user.controller');

const router =  Router();

router.get('/', usersGet);
router.post('/', usersPost);

module.exports = router;