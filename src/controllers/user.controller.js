const { userService } = require('../services');

let controller = {};

controller.createUser = async (body) => {
    const result = await userService.create(body);

    return result;
};

controller.login = async (username, password) => {
    const matchPattern = { username, password };
    const result = await userService.fetch(matchPattern);

    return result;
};

controller.fetchMe = async (userId) => {
    const matchPattern = {};
    const additionalQuery = ` where id(u) = ${userId} `;
    const result = await userService.fetch(matchPattern, additionalQuery);

    return result;
}

module.exports = controller;