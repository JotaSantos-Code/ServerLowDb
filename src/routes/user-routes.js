'use strict';

const { Router } = require("express");
const router = Router();


const { getUsers } = require('../controllers/get-users');
const { createUser } = require('../controllers/create-users');
const { loginUser } = require('../controllers/login-user');
const { deleteUserById } = require('../controllers/delete-user');
const { updateUser } = require('../controllers/updateUser');

const {validaAuth } = require('../middleware/validate-auth');


router.get("/users", getUsers);
router.post("/users", createUser);
router.post("/users", loginUser);
router.delete("/users/:id", deleteUserById);
router.put("/users/:id", updateUser);



module.exports = router;
