const { Router } = require('express');

const {
    usersPost,
    usersGet,
    addUser

}= require('../controller/user.controller');

const router =  Router();

router.get('/', usersGet);
router.post('/', usersPost);
router.post('/add', addUser);

module.exports = router;