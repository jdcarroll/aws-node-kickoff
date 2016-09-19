/*
* Commands aws-node-kickoff is dependant on
*
* 1. Assuming that you ran npmStruct the folder structure should be created already
* 2. hserver
* 2. hconfig
* 3. hpublic
*
* Installation Instructions
*
* npm install --save hapi good good-squeeze good-console inert gulp gulp-sass gulp-notify gulp-nodemon gulp-uglifyjs
*
*/

'use strict';

const Hapi = require('hapi');
const config = require('./config');

const server = new Hapi.Server();
server.connection({
    port: config.server.port
})

server.register([

    config.plugins.good,
    config.plugins.inert,
    config.routes.public

], function (err) {
    if (err) {
        throw err;
    }

//Starting the Server
server.start(function (err) {
if (err) {
    throw err;
}

console.log('Server running at:', server.info.uri);
    });

});
