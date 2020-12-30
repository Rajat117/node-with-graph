const neo4j = require('neo4j-driver');

const url = process.env.DB_URL;
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;

const driver = neo4j.driver(url, neo4j.auth.basic(dbUser, dbPassword));

module.exports = { driver };
