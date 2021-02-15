'use strict';

const { getConnection } = require('../database');
const { v4 } = require('uuid');
const { getUsers } = require('./get-users');


const createUser = (req, res) => {
    const newUsers = {
        "id": v4(),
        "name": req.body.name,
        "password": req.body.password,
        "email": req.body.email
    }

    getConnection().get('users').push(newUsers).write();
    res.send(newUsers);
}



module.exports = {
    createUser,
}