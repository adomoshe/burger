const orm = require('../config/orm.js');

burger = {
    selectAll: function (cb) {
        orm.selectAll('burgers', function (res) {
            cb(res);
        });
    },
    insertOne: function (burgerName, cb) {
        orm.insertOne('burgers', 'burger_name', 'devoured', burgerName, false, function (res) {
            cb(res);
        });
    },
    updateOne: function (burgerID, devouredStatus, cb) {
        orm.updateOne('burgers', 'devoured', devouredStatus, 'id', burgerID, function (res) {
            cb(res);
        });
    },
    deleteOne: function (burgerID, cb) {
        orm.deleteOne('burgers', 'id', burgerID, function (res) {
            cb(res);
        });
    }
};

module.exports = burger;

// burger.selectAll(function (result) {
//     console.log(result);
//     if (result.affectedRows == 0) {
//         return res.status(404).end();
//     } else {
//         res.status(200).end();
//     };
// });

// burger.insertOne('El Clasico', function (result) {
//     if (result.affectedRows == 0) {
//         return res.status(404).end();
//     } else {
//         res.status(200).end();
//     };
// });

// burger.updateOne('El Clasico', true, function (result) {
//     if (result.affectedRows == 0) {
//         return res.status(404).end();
//     } else {
//         res.status(200).end();
//     };
// });

// burger.deleteOne(6, function (result) {
//     if (result.affectedRows == 0) {
//         return res.status(404).end();
//     } else {
//         res.status(200).end();
//     };
// })



