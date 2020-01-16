const router = require('express').Router();
const listUser = require('../api/user/listUsers');
const getUser = require('../api/user/getUser');
router.get('/user',listUser);
router.get('/user/:userId',getUser);
router.get('/',(req,res)=> res.send("<h1>Welcome to User Routes</h1><p>Make some meaningful user requests. :-)</p>"));
module.exports = router;