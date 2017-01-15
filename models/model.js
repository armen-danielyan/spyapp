var DB = require('../bin/db').DB;

var User = DB.Model.extend({
    tableName: 'users',
    hasTimestamps: true,
    idAttribute: 'ID'
});

module.exports = {
    User: User
};