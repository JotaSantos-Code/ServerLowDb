const {getConnection} = require('../database');
const { getUsers } = require('./get-users');



const findUserByEmail = async (req, res) => {

    const user = await getUsers();
    console.log(user);


}


module.exports = {
    findUserByEmail,
}