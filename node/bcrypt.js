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