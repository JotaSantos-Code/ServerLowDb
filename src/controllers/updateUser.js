"use strict";

const { getConnection } = require("../database");

const updateUser = async (req, res) => {
  const updatedUser = await getConnection()
    .get("users")
    .find({ id: req.params.id })
    .assign(req.body)
    .write();
  res.json(updatedUser);
};


module.exports = {
    updateUser,
}
