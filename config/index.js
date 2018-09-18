// A common object for accessing config values
// Gets included automatically because of its name index.js

const configValues = require('./config');

module.exports = {

    getDbConnectionString: function () {
        // mongodb://<dbuser>:<dbpassword>@ds147942.mlab.com:47942/nodetodo
        let dbcnxn = 'mongodb://' + configValues.username + ':' + configValues.pwd + '@ds251622.mlab.com:51622/nodetodo';
        console.log("Connecting to Database: "+dbcnxn);
        return dbcnxn;
    }
    // getDbConnectionString: function () {
    //     // return 'YOUR_MONGO_URL';
    //     return 'mongodb://' + configValues.username + ':' + configValues.pwd + '@ds251622.mlab.com:51622/nodetodo2';
    // },


};
