"use strict";

const Joi = require("joi");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const { async } = require("crypto-random-string");
const { getConnection } = require("../database");
const { getUsers } = require("./get-users");

async function loginUser(req, res) {
  try {

    const { email, password } = req.body;
    console.log(req.body);

    const validPassword = await bcrypt.compare(password, user.contraseña);
    if (!validPassword) {
      const error = new Error("Contraseña incorrecta");
      error.status = 403;
      throw error;
    }

    const secret = process.env.JWT_SECRET;
    const { idusuario, nombreusuario } = user;
    const jwtTokenExpiration = "30m";
    const payload = { idusuario, nombreusuario, password };

    const token = jwt.sign(payload, secret, { expiresIn: jwtTokenExpiration });

    const response = { accessToken: token, expiresIn: jwtTokenExpiration };

    res.jason(response);
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
}

module.exports = { loginUser };
