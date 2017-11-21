const Bcrypt = require('bcrypt');

module.exports.hashPassword = (password) => {
    return new Promise((resolve, reject) => {
        Bcrypt.genSalt((err, salt) => {
            if (err) {
                console.log(err);
            }
            Bcrypt.hash(password, salt, (err, hash) => {
                if (err) {
                    console.log(err);
                }
                resolve(hash);
            });
        });
    });
};

module.exports.checkPassword = (plainTextPassword, hashedPassword) => {
    return new Promise((resolve, reject) => {
        Bcrypt.compare(plainTextPassword, hashedPassword, (err, match) => {
            if(err) {
                reject(err);
            }
            resolve(match);
        });
    });
};