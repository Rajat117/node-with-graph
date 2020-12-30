const { executeQuery } = require('../utils/runQuery');
const { createStringFromNodeAttributes } = require('../utils/sanitize');

let service = {};

service.create = async (body) => {
    console.log(JSON.parse(JSON.stringify(body)), 'ssss');
    const query = `CREATE(u: User ${createStringFromNodeAttributes(body)} )`;
    console.log(query);
    const result = await executeQuery(query);

    return result;
};

service.fetch = async (matchPattern, additionalQuery = '') => {
    const query = `MATCH (u: User ${createStringFromNodeAttributes(matchPattern)}) ${additionalQuery} RETURN u`;
    console.log(query);
    const result = await executeQuery(query);

    console.log('Result', result);
    return result;
};

service.delete = async (id) => {

};

module.exports = service;
