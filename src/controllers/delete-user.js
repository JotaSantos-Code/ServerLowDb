"use strict";

const { getConnection } = async require("../database");

const deleteUserById = (req, res) => {
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
