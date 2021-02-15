"use strict";

const { getConnection } = require("../database");

const deleteUserById = async (req, res) => {
  const deletedUser = await getConnection()
    .get("users")
    .remove({ id: req.params.id })
    .write();
  res.json(deletedUser);
  console.log(deletedUser);
};

module.exports = {
  deleteUserById,
};
