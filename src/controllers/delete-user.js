"use strict";

const { getConnection } = require("../database");

const deleteUserById = async (req, res) => {
  try {
      
    const deletedUser =  await getConnection()
      .get("users")
      .remove({ id: req.params.id })
      .write();
    res.jason(deletedUser);
    console.log(deletedUser);

  } catch (error) {
    const error = new Error("Algo ha salido mal.");
    throw error;
  }
};

module.exports = {
  deleteUserById,
};
