'use strict';

const { Router } = require("express");
const router = Router();


const { getUsers } = require('../controllers/get-users');
const { createUser } = require('../controllers/create-users');
const { loginUser } = require('../controllers/login-user');

const {validaAuth } = require('../middleware/validate-auth');


router.get("/users", getUsers);
router.post("/users", createUser);
router.post("/users", loginUser);



module.exports = router;
