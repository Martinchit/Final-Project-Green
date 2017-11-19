const Redis = require('redis');

let client = Redis.createClient({
    host: 'localhost',
    port: 6379
});

module.exports = client;