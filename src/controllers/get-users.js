"use strict";

const { getConnection } = require("../database");

const getUsers = (req, res) => {
  const users = getConnection().get("users").value();
  res.json(users);
};

module.exports = {
  getUsers,
};
