const { driver } = require('../database/config');

const executeQuery = async (query) => {
    const session = driver.session();
    let result;
    try {
        result = await session.run(query);
    } catch (error) {
        console.log('Error: ', error);
        throw error;
    } finally {
        await session.close();
    }
    
    return result;
}

module.exports = {
    executeQuery
}

