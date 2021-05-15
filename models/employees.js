const orm = require("../config/orm.js");

const employee = {
    read: function  (query, criteria,cb) {
        orm.read(query,criteria,function(res) {
            cb(res);
        })
    }
}
//dont forget to export this!\

module.exports = employee;