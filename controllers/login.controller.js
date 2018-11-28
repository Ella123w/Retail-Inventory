'use strict';
const Mongoose = require('mongoose');
const Boom = require('boom');
const User = Models.User;


module.exports = {
	validate: async (request, username, password) => {

    const user = users[username];
    if (!user) {
        return { credentials: null, isValid: false };
    }
    const isValid = await Bcrypt.compare(password, user.password);
    const credentials = { id: user.id, name: user.name };
    return { isValid, credentials };
   }
}
