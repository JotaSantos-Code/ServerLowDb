const {getConnection} = require('../database');
const { getUsers } = require('./get-users');



const findUserByEmail = async (req, res) => {

    const user = await getConnection().get('users').find({ email: users.email }).value();
    res.json()


}


module.exports = {
    findUserByEmail,
}